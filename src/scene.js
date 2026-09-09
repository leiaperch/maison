// La maison : chaque pièce est une vidéo en panoramique affichée par un quad
// plein écran, une caméra three.js calée sur sa perspective et des scans posés
// sur son sol avec de vraies ombres. La caméra suit la rotation mesurée sur la
// vidéo ; le « travelling » au clic est numérique (zoom + recadrage appliqués à
// la vidéo et à la caméra 3D), donc les objets restent exactement en place.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import gsap from 'gsap';

const VIDEO_ASPECT = 16 / 9;
const loader = new GLTFLoader();

// Deux couches vidéo : la pièce courante, et sa voisine pendant la transition.
// Chacune a son propre zoom et son propre recadrage, sinon le fondu enchaîné
// mélangerait deux cadrages qui ne se ressemblent pas.
const BACKDROP = {
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,
  fragmentShader: `
    precision highp float;
    uniform sampler2D uVideo, uVideoB;
    uniform vec2 uRes, uPan, uPanB;
    uniform float uAsp, uZoom, uZoomB, uMix, uDim, uReady, uAlpha;
    varying vec2 vUv;
    vec3 layer(sampler2D tex, vec2 pan, float zoom){
      vec2 uv = .5 + (vUv - .5 - pan) / zoom;
      float a = uRes.x / uRes.y;
      if (a > uAsp) uv.y = .5 + (uv.y - .5) * (uAsp / a); else uv.x = .5 + (uv.x - .5) * (a / uAsp);
      return texture2D(tex, uv).rgb;
    }
    void main(){
      vec3 col = layer(uVideo, uPan, uZoom);
      if (uMix > .001) col = mix(col, layer(uVideoB, uPanB, uZoomB), uMix);
      float vig = smoothstep(.5, 1.3, length(vUv - .5) * 1.5);
      col *= 1. - vig * .25 - uDim;
      gl_FragColor = vec4(col * uReady, uAlpha);
    }`,
};

// la diffuse d'un scan est déjà colorée : on la ramène à une carte de luminance
// centrée sur le gris clair, pour que `material.color` teinte sans assombrir
function tintable(tex) {
  const img = tex.image; if (!img || !img.width) return tex;
  const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, c.width, c.height), px = d.data;
  let mean = 0;
  for (let i = 0; i < px.length; i += 4) mean += 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
  mean /= px.length / 4;
  const k = 205 / Math.max(1, mean);
  for (let i = 0; i < px.length; i += 4) {
    const l = Math.min(255, 205 + ((0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) * k - 205) * 0.55);
    px[i] = px[i + 1] = px[i + 2] = l;
  }
  g.putImageData(d, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = tex.colorSpace; t.flipY = tex.flipY; t.wrapS = tex.wrapS; t.wrapT = tex.wrapT; t.anisotropy = tex.anisotropy;
  return t;
}

function contactShadow(radius, opacity = 0.45) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'); const grd = g.createRadialGradient(128, 128, 8, 128, 128, 128);
  grd.addColorStop(0, 'rgba(0,0,0,1)'); grd.addColorStop(0.5, 'rgba(0,0,0,.4)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.003; m.renderOrder = 1;
  return m;
}

function fitOnFloor(obj) {
  const box = new THREE.Box3().setFromObject(obj);
  obj.position.y -= box.min.y;
  const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
  obj.position.x -= center.x; obj.position.z -= center.z;
  return size;
}

export async function createScene(canvas, { rooms, videos, links = [], tracks, hdri = '/hdri/brown_photostudio_02_1k.hdr', onProgress = () => {} }) {
  const flags = new URLSearchParams(location.search);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: flags.has('capture') });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.autoClear = false;

  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = await new Promise((res, rej) => new RGBELoader().load(hdri, (t) => { res(pmrem.fromEquirectangular(t).texture); t.dispose(); }, undefined, rej));
  onProgress(0.1);

  /* ---------- fond vidéo ---------- */
  const vtex = (v) => { const t = new THREE.VideoTexture(v); t.colorSpace = THREE.SRGBColorSpace; t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; return t; };
  // les pièces d'abord, les plans de liaison ensuite : `setBlend` indexe l'ensemble
  const texes = [...videos.map(vtex), ...links.map(vtex)];
  const dolly = { zoom: 1, panX: 0, panY: 0 };
  const dollyB = { zoom: 1, panX: 0, panY: 0 };
  const bgScene = new THREE.Scene(), bgCam = new THREE.Camera();
  const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ ...BACKDROP, transparent: true, depthTest: false, depthWrite: false, uniforms: {
    uVideo: { value: texes[0] }, uVideoB: { value: texes[0] },
    uRes: { value: new THREE.Vector2(1, 1) },
    uPan: { value: new THREE.Vector2() }, uPanB: { value: new THREE.Vector2() },
    uAsp: { value: VIDEO_ASPECT }, uZoom: { value: 1 }, uZoomB: { value: 1 }, uMix: { value: 0 },
    uDim: { value: 0 }, uReady: { value: 0 }, uAlpha: { value: 1 },
  } }));
  backdrop.frustumCulled = false; bgScene.add(backdrop);
  const bu = backdrop.material.uniforms;

  /* ---------- la scène 3D, commune à toutes les pièces ---------- */
  const scene = new THREE.Scene(); scene.environment = env; scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(60, 1, 0.05, 60);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: 0.32 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  const sun = new THREE.DirectionalLight(0xffffff, 2); sun.castShadow = true;
  sun.target.position.set(0.5, 0, -7); scene.add(sun.target);
  sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = sun.shadow.camera.bottom = -6; sun.shadow.camera.right = sun.shadow.camera.top = 6; sun.shadow.camera.far = 24; sun.shadow.bias = -0.0004; sun.shadow.radius = 3;
  scene.add(sun, new THREE.HemisphereLight(0xfff2e2, 0xa8907a, 0.35));
  // Mire de calage (?calib) : l'horizon (une ligne à la hauteur exacte de la
  // caméra, donc toujours plate), un mètre au sol, et des cubes d'un mètre. Le
  // calage est bon quand les cubes ont l'air posés et que leur mètre s'accorde
  // avec la pièce — un plan de travail fait 0,90, une porte 2,05.
  if (flags.has('calib')) {
    const g = new THREE.GridHelper(14, 14, 0xff2200, 0xff8844); g.position.z = -6; scene.add(g);
    const line = (a, b, c) => new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), new THREE.LineBasicMaterial({ color: c }));
    const rig = new THREE.Group(); scene.add(rig);
    for (const [x, z] of [[-2.5, -3], [0, -5], [2.5, -3], [0, -8]]) {
      const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true }));
      cube.position.set(x, 0.5, z); rig.add(cube);
    }
    rig.add(line(new THREE.Vector3(-60, 0, -60), new THREE.Vector3(60, 0, -60), 0x00aaff));  // sol à 60 m
    rig.add(line(new THREE.Vector3(-900, 0, -900), new THREE.Vector3(900, 0, -900), 0xffff00)); // horizon du sol
  }

  /* ---------- objets de toutes les pièces ---------- */
  const items = [];
  const all = rooms.flatMap((r, ri) => r.items.map((it) => ({ ...it, room: ri })));
  let done = 0;
  await Promise.all(all.map(async (it) => {
    let m;
    try { m = await new Promise((res, rej) => loader.load(it.model, (g) => res(g.scene), undefined, rej)); }
    catch (e) { console.warn('modèle illisible, ignoré :', it.model, e.message); done++; return; }
    const size = fitOnFloor(m);
    const mats = {};
    // un objet posé sur un meuble ne doit pas projeter d'ombre solaire : le sol
    // 3D passe sous le plan de travail de la vidéo, l'ombre y tomberait à côté.
    // Sa petite ombre de contact, elle, reste collée sous lui.
    const onFloor = (it.pos[1] || 0) < 0.25;
    m.traverse((n) => { if (n.isMesh) { n.castShadow = onFloor; n.receiveShadow = true; n.userData.item = it; mats[n.material.name] = n.material; n.material.envMapIntensity = 1; } });
    (it.tint || []).forEach((t) => { const mat = mats[t.material]; if (!mat) return; if (mat.map) { mat.map = tintable(mat.map); mat.needsUpdate = true; } mat.color.set(t.options[0].hex); });
    const g = new THREE.Group(); g.position.set(...it.pos); g.rotation.y = it.rot || 0;
    const inner = new THREE.Group(); inner.add(m); g.add(inner);
    const sh = contactShadow(Math.max(size.x, size.z) * 0.8); sh.material.opacity = 0; g.add(sh);
    g.visible = false; scene.add(g);
    items.push({ ...it, group: g, inner, shadow: sh, mats, size, shown: false });
    done++; onProgress(0.1 + 0.9 * done / all.length);
  }));

  /* ---------- pièce active : calage caméra, vidéo, soleil ---------- */
  let cur = -1, cal = { ...rooms[0].camera }, fpx = 1;
  const calRoom = flags.has('room') ? +flags.get('room') : 0;
  function setRoom(i) {
    if (i === cur) return;
    cur = i;
    cal = { ...rooms[i].camera };
    if (i === calRoom) ['fov', 'height', 'pitch', 'yaw', 'roll'].forEach((k) => { if (flags.has(k)) cal[k] = parseFloat(flags.get(k)); });
    camera.position.set(0, cal.height, 0);
    fpx = (1920 / 2) / Math.tan(THREE.MathUtils.degToRad(cal.fov) / 2);
    bu.uVideo.value = texes[i];
    const s = rooms[i].sun; sun.position.set(...s.pos); sun.color.set(s.color); sun.intensity = s.intensity;
    items.forEach((it) => { if (it.room !== i) { it.shown = false; it.group.visible = false; it.shadow.material.opacity = 0; } });
    applyDolly();
  }

  let snap = false, dip = 0;
  const dimBase = { v: 0 };
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let hoverItem = null;
  const tmp = new THREE.Vector3();
  const target = { zoom: 1, panX: 0, panY: 0 };

  function resize() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    bu.uRes.value.set(w, h);
    camera.aspect = w / h;
    applyDolly();
  }
  // même zoom et même recadrage pour la caméra 3D : la fenêtre voit une sous-région
  function applyDolly() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    const tanH = Math.tan(THREE.MathUtils.degToRad(cal.fov) / 2);
    const a = w / h;
    const tanV = a >= VIDEO_ASPECT ? tanH / a : tanH / VIDEO_ASPECT;
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(tanV / dolly.zoom));
    camera.setViewOffset(w, h, -dolly.panX * w, dolly.panY * h, w, h);
    camera.updateProjectionMatrix();
    bu.uZoom.value = dolly.zoom; bu.uPan.value.set(dolly.panX, dolly.panY);
    bu.uZoomB.value = dollyB.zoom; bu.uPanB.value.set(dollyB.panX, dollyB.panY);
  }
  addEventListener('resize', resize); resize();
  setRoom(0);

  // la caméra 3D suit le panoramique mesuré sur la vidéo de la pièce (rotation pure)
  function followTrack() {
    const track = tracks[cur], video = videos[cur];
    let dx = 0, dy = 0;
    if (track && track.track.length) {
      const f = Math.min(Math.max(video.currentTime * track.fps, 0), track.track.length - 1), i = Math.floor(f), t = f - i, j = Math.min(i + 1, track.track.length - 1);
      dx = track.track[i][0] + (track.track[j][0] - track.track[i][0]) * t; dy = track.track[i][1] + (track.track[j][1] - track.track[i][1]) * t;
    }
    camera.rotation.set(THREE.MathUtils.degToRad(cal.pitch) + Math.atan(dy / fpx), THREE.MathUtils.degToRad(cal.yaw) + Math.atan(dx / fpx), THREE.MathUtils.degToRad(cal.roll), 'YXZ');
  }
  const find = (id) => items.find((i) => i.id === id);

  return {
    camera, setRoom,
    ready() { bu.uReady.value = 1; },
    tick() {
      const k = snap ? 1 : 0.06;
      dolly.zoom += (target.zoom - dolly.zoom) * k; dolly.panX += (target.panX - dolly.panX) * k; dolly.panY += (target.panY - dolly.panY) * k;
      bu.uDim.value = dimBase.v + dip;
      applyDolly(); followTrack();
      renderer.clear();
      bu.uAlpha.value = 1;
      renderer.render(bgScene, bgCam);
      renderer.render(scene, camera);
      // pendant la transition, le fond est redessiné par-dessus la 3D avec
      // l'opacité du fondu : les objets de la pièce s'effacent en même temps
      // qu'elle, au lieu de flotter dans le couloir
      if (bu.uMix.value > 0.002) { bu.uAlpha.value = bu.uMix.value; renderer.render(bgScene, bgCam); }
    },
    setDolly(zoom, panX = 0, panY = 0, locked = false) { target.zoom = zoom; target.panX = panX; target.panY = panY; snap = locked; },
    // Couche vidéo voisine pendant la transition : sa texture, son poids dans le
    // fondu, et son propre cadrage. `mix = 0` la désactive (le shader saute alors
    // l'échantillonnage).
    setBlend(idx, mix, zoom = 1, panX = 0, panY = 0, dipVal = 0) {
      bu.uMix.value = mix;
      dip = dipVal;
      if (idx >= 0 && texes[idx]) bu.uVideoB.value = texes[idx];
      dollyB.zoom = zoom; dollyB.panX = panX; dollyB.panY = panY;
    },
    setDim(v) { gsap.to(dimBase, { v, duration: 0.8 }); },
    // fait arriver ou repartir un objet
    show(id, on) {
      const it = find(id); if (!it || it.shown === on) return;
      it.shown = on;
      if (on) {
        it.group.visible = true;
        gsap.killTweensOf([it.inner.position, it.inner.scale, it.shadow.material]);
        it.inner.position.y = 0.55; it.inner.scale.setScalar(0.92);
        gsap.to(it.inner.position, { y: 0, duration: 1.1, ease: 'bounce.out' });
        gsap.to(it.inner.scale, { x: 1, y: 1, z: 1, duration: 0.9, ease: 'power3.out' });
        gsap.to(it.shadow.material, { opacity: 0.45, duration: 0.9, delay: 0.3 });
      } else {
        gsap.killTweensOf([it.inner.position, it.inner.scale, it.shadow.material]);
        gsap.to(it.inner.position, { y: 0.6, duration: 0.5, ease: 'power2.in', onComplete: () => { it.group.visible = false; } });
        gsap.to(it.inner.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'power2.in' });
        gsap.to(it.shadow.material, { opacity: 0, duration: 0.3 });
      }
    },
    // position écran (fraction de la fenêtre, y vers le bas) du haut d'un objet
    anchor(id) {
      const it = find(id);
      const b = new THREE.Box3().setFromObject(it.group);
      tmp.set((b.min.x + b.max.x) / 2, b.max.y, (b.min.z + b.max.z) / 2).project(camera);
      return { x: (tmp.x + 1) / 2, y: (1 - tmp.y) / 2, visible: it.shown };
    },
    // recadrage vers un objet : zoom, et on l'amène à gauche du panneau
    focusDolly(id) {
      const it = find(id);
      const b = new THREE.Box3().setFromObject(it.group);
      const saveZ = dolly.zoom, sx = dolly.panX, sy = dolly.panY;
      dolly.zoom = 1; dolly.panX = 0; dolly.panY = 0; applyDolly();
      b.getCenter(tmp).project(camera);
      dolly.zoom = saveZ; dolly.panX = sx; dolly.panY = sy; applyDolly();
      const z = 1.5, px = tmp.x / 2, py = tmp.y / 2;
      const side = innerWidth > 760 ? -0.16 : 0;
      target.zoom = z; target.panX = -(px * z) + side; target.panY = -(py * z) - (innerWidth > 760 ? 0.02 : 0.12);
    },
    hover(px, py) {
      ndc.set(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(items.filter((i) => i.shown).map((i) => i.group), true).find((h) => h.object.userData.item);
      const it = hit ? hit.object.userData.item : null;
      if (it !== hoverItem) {
        items.forEach((i) => Object.values(i.mats).forEach((m) => gsap.to(m.emissive, { r: 0, g: 0, b: 0, duration: 0.35 })));
        if (it) Object.values(find(it.id).mats).forEach((m) => gsap.to(m.emissive, { r: 0.16, g: 0.09, b: 0.04, duration: 0.35 }));
        hoverItem = it;
      }
      return it ? find(it.id) : null;
    },
    // point du sol visé par le curseur (plan y = 0)
    floorPoint(px, py) {
      ndc.set(px / innerWidth * 2 - 1, -(py / innerHeight) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const p = new THREE.Vector3();
      return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), p) ? p : null;
    },
    moveTo(id, x, z) { const it = find(id); it.group.position.x = x; it.group.position.z = z; },
    positionOf(id) { return find(id).group.position; },
    rotate(id, delta) { find(id).group.rotation.y += delta; },
    setTint(id, materialName, hex) {
      const it = find(id); const m = it && it.mats[materialName]; if (!m) return;
      gsap.to(m.color, { ...new THREE.Color(hex), duration: 0.6, ease: 'power2.out' });
    },
  };
}
