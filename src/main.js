// Gabarit « Maison » : des pièces vides en vidéo, traversées au scroll, que les
// objets réels en 3D viennent peupler dans la vraie perspective. Clic sur un
// objet : la caméra s'en approche, un panneau permet de le composer, on le
// déplace et on le tourne à la main. Puis le contact.

import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { site, hero, rooms, link, contact } from './content.js';
import { el, clear } from './dom.js';
import { createScene } from './scene.js';
import { createScrub } from './scrub.js';

gsap.registerPlugin(ScrollTrigger);
const byId = (id) => document.getElementById(id);
const lines = (host, arr) => { clear(host); arr.forEach((l) => host.append(el('span', { class: 'ln' }, el('i', { text: l })))); return host; };
const euro = (n) => `${n.toLocaleString('fr-FR')} €`;
const mobile = innerWidth < 900;
const allItems = rooms.flatMap((r, ri) => r.items.map((it) => ({ ...it, room: ri })));

/* ---------- contenu ---------- */
function renderContent() {
  document.title = site.brand;
  byId('loader-brand').textContent = site.brand; byId('brand').textContent = site.brand;
  site.nav.forEach(([href, label]) => byId('nav').append(el('a', { href, text: label })));
  byId('cta').textContent = site.cta.label; byId('cta').href = site.cta.href;
  byId('hero-kicker').textContent = hero.kicker; lines(byId('hero-title'), hero.title); byId('hero-text').textContent = hero.text;
  allItems.forEach((it) => byId('captions').append(el('div', { class: 'caption', id: `cap-${it.id}` }, el('i'), el('div', {}, lines(el('h2', { class: 'ctitle' }), it.caption), el('p', { text: it.text })))));
  rooms.forEach((r, i) => byId('rooms-nav').append(el('button', { type: 'button', text: r.name, dataset: { room: i } })));
  byId('ct-kicker').textContent = contact.kicker; lines(byId('ct-title'), contact.title); byId('ct-text').textContent = contact.text;
  const m = byId('ct-mail'); m.textContent = contact.mail; m.href = `mailto:${contact.mail}`; byId('ct-address').textContent = contact.address;
  byId('foot').append(el('span', { text: `© ${new Date().getFullYear()} ${site.brand}` }), el('span', { text: site.footer }));
}
function renderIndex(ri) {
  const host = byId('room-index'); clear(host);
  rooms[ri].items.forEach((it) => host.append(el('button', { type: 'button', text: it.name, dataset: { id: it.id } })));
}

/* ---------- curseur : point qui grossit et s'aimante ---------- */
function cursor() {
  const c = byId('cursor'), label = byId('cursor-label');
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }, cur = { x: pos.x, y: pos.y };
  let magnet = null;
  addEventListener('pointermove', (e) => { pos.x = e.clientX; pos.y = e.clientY; }, { passive: true });
  gsap.ticker.add(() => {
    let tx = pos.x, ty = pos.y;
    if (magnet) { const r = magnet.getBoundingClientRect(); tx = r.left + r.width / 2 + (pos.x - r.left - r.width / 2) * 0.35; ty = r.top + r.height / 2 + (pos.y - r.top - r.height / 2) * 0.35; }
    cur.x += (tx - cur.x) * 0.22; cur.y += (ty - cur.y) * 0.22;
    c.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%)`;
  });
  document.querySelectorAll('[data-magnet]').forEach((n) => {
    n.addEventListener('pointerenter', () => { magnet = n; c.classList.add('hide'); gsap.to(n, { scale: 1.06, duration: 0.4, ease: 'power3.out' }); });
    n.addEventListener('pointermove', (e) => { const r = n.getBoundingClientRect(); gsap.to(n, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25, duration: 0.5, ease: 'power3.out' }); });
    n.addEventListener('pointerleave', () => { magnet = null; c.classList.remove('hide'); gsap.to(n, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, .5)' }); });
  });
  return { setLabel(t) { label.textContent = t; c.classList.toggle('big', !!t); } };
}

function reveals() {
  document.querySelectorAll('.contact .display').forEach((h) => gsap.from(h.querySelectorAll('.ln i'), { yPercent: 105, duration: 1.2, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: h, start: 'top 85%', once: true } }));
  document.querySelectorAll('.contact .kicker, .contact .lead, .mail, .address').forEach((n) => gsap.from(n, { y: 24, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: n, start: 'top 90%', once: true } }));
}

/* ---------- boot ---------- */
renderContent();
const cur = cursor();
const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); lenis.scrollTo(t, { duration: 1.5 });
}));

(async () => {
  const bar = byId('loader-bar');
  // les pièces s'enchaînent dans une seule chaîne de scrub ; chaque vidéo a sa trajectoire mesurée
  const [scrub, tracks] = await Promise.all([
    createScrub({ clips: rooms.map((r) => ({ src: r.video, poster: r.poster })), links: [{ src: link.video, poster: link.poster }], onProgress: (p) => gsap.to(bar, { scaleX: p * 0.3, duration: 0.4 }) }),
    Promise.all(rooms.map((r) => fetch(r.track).then((x) => x.json()))),
  ]);
  const scene = await createScene(byId('gl'), { rooms, videos: scrub.videos, links: scrub.linkVideos, tracks, onProgress: (p) => gsap.to(bar, { scaleX: 0.3 + p * 0.7, duration: 0.4 }) });
  const HALL = rooms.length; // le couloir vient juste après les pièces dans les textures
  scrub.jump(0.002 / rooms.length + 0.003); // au-delà du seuil de saut, pour décoder une première image

  /* le scroll traverse les pièces et les peuple */
  let progress = 0, selected = null, lastShown = null, roomIdx = -1;
  const heroEl = byId('top'); let heroOn = true;
  const caps = Object.fromEntries(allItems.map((it) => [it.id, byId(`cap-${it.id}`)]));
  Object.values(caps).forEach((c) => { gsap.set(c, { autoAlpha: 0 }); gsap.set(c.querySelectorAll('.ln i'), { yPercent: 105 }); });
  let capOn = null;
  function showCaption(id) {
    if (id === capOn) return;
    if (capOn) { gsap.to(caps[capOn], { autoAlpha: 0, duration: 0.4, overwrite: true }); gsap.to(caps[capOn].querySelectorAll('.ln i'), { yPercent: -105, duration: 0.4, overwrite: true }); }
    capOn = id;
    if (id) { gsap.fromTo(caps[id], { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.35, ease: 'power3.out', overwrite: true }); gsap.fromTo(caps[id].querySelectorAll('.ln i'), { yPercent: 105 }, { yPercent: 0, duration: 1, delay: 0.35, ease: 'expo.out', stagger: 0.08, overwrite: true }); }
  }
  const roomTitle = byId('room-title'), rtName = byId('rt-name'), rtKicker = byId('rt-kicker');

  /* ---------- la transition entre deux pièces ----------
     Pas de carton : un vrai plan de liaison. On quitte la pièce en poussant vers
     l'avant, on enchaîne sur le travelling de couloir, qui avance jusqu'à ce que
     la porte remplisse le cadre, et on entre dans la pièce suivante par cette
     porte. `q` court de 0 à 1 sans rupture d'un côté à l'autre de la frontière :
     0 à 0,5 sur la queue de la pièce qu'on quitte, 0,5 à 1 sur la tête de celle
     qu'on rejoint. Au milieu, le couloir couvre tout l'écran — c'est exactement
     là que la caméra 3D bascule d'un calage à l'autre, donc l'échange des objets
     ne se voit pas. */
  const T = 0.16;                             // durée, en progression locale d'une pièce
  const PUSH = 0.9;                           // ce que la pièce gagne en zoom avant de céder la place
  const HALL_ZOOM = 1.05, HALL_DOOR = 1.2;    // cadrage du couloir, puis poussée dans la porte
  const DOOR = [0.48, 0.40];                  // où est la porte dans la dernière image du couloir
  const clamp01 = (v) => Math.min(Math.max(v, 0), 1);
  const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const baseDolly = (pl) => ({ zoom: 1.18 + 0.04 * pl, panX: 0.09 - 0.18 * pl, panY: -0.01 });
  // progression globale → pièce courante et progression locale, d'après les durées réelles des clips
  function locate(p) {
    const t = p * scrub.total; let i = 0, start = 0;
    while (i < scrub.durations.length - 1 && t > start + scrub.durations[i]) { start += scrub.durations[i]; i++; }
    return { i, pl: Math.min(Math.max((t - start) / scrub.durations[i], 0), 1) };
  }
  function drive(p) {
    progress = p;
    const h = p < 0.012;
    if (h !== heroOn) { heroOn = h; gsap.to(heroEl, { autoAlpha: h ? 1 : 0, y: h ? 0 : -30, duration: h ? 0.9 : 0.6, ease: h ? 'expo.out' : 'power2.in', overwrite: true }); }
    const { i, pl } = locate(p);
    if (i !== roomIdx) { roomIdx = i; scene.setRoom(i); renderIndex(i); deselect(); byId('rooms-nav').querySelectorAll('button').forEach((b) => b.classList.toggle('on', +b.dataset.room === i)); }
    const room = rooms[i];
    let last = null;
    room.items.forEach((it) => { const on = pl >= it.at; scene.show(it.id, on); if (on) last = it; });
    if (last !== lastShown) { lastShown = last; if (selected && (!last || room.items.indexOf(selected) > room.items.indexOf(last))) deselect(); }

    // où en est-on de la transition ? -1 = nulle part
    const tail = i < rooms.length - 1 ? clamp01((pl - (1 - T)) / T) : 0;
    const head = i > 0 ? clamp01(1 - pl / T) : 0;
    const q = tail > 0 ? tail * 0.5 : (head > 0 ? 1 - head * 0.5 : -1);
    showCaption(last && pl - last.at < 0.11 && !selected && q < 0 ? last.id : null);

    if (q < 0) {
      scene.setBlend(-1, 0);
      if (!selected) scene.setDolly(1.18 + 0.04 * pl, 0.09 - 0.18 * pl, -0.01); // recadrage qui accompagne le panoramique
      roomTitle.style.opacity = 0; roomTitle.style.visibility = 'hidden';
      byId('room-index').style.opacity = '';
    } else {
      // la pièce pousse vers l'avant en sortant, et se dégonfle en entrant
      const push = (tail > 0 ? smooth(0, 0.42, q) : 1 - smooth(0.78, 1, q)) * PUSH;
      const A = baseDolly(pl);
      scene.setDolly(A.zoom + push, A.panX, A.panY, true);

      // le couloir : plein écran au milieu, il pousse dans la porte sur la fin
      // la poussée dans la porte doit être finie AVANT que le couloir s'efface,
      // sinon on quitte le plan alors que la porte est encore petite
      const cross = smooth(0.10, 0.34, q) * (1 - smooth(0.80, 0.96, q));
      const into = smooth(0.46, 0.80, q);                 // 0 = plein couloir, 1 = plein cadre sur la porte
      const cz = HALL_ZOOM + HALL_DOOR * into;
      scene.setBlend(HALL, cross, cz, (0.5 - DOOR[0]) * cz * into, (DOOR[1] - 0.5) * cz * into);
      scrub.seekLink(0, smooth(0.10, 0.78, q));

      // le nom de la pièce qu'on rejoint, posé sur le couloir
      const to = tail > 0 ? rooms[i + 1] : rooms[i];
      rtName.textContent = to.name; rtKicker.textContent = 'Vous entrez dans';
      const lab = smooth(0.28, 0.46, q) * (1 - smooth(0.62, 0.82, q));
      roomTitle.style.opacity = lab; roomTitle.style.visibility = lab > 0.01 ? 'visible' : 'hidden';
      // l'index des objets de la pièce qu'on quitte n'a plus rien à dire ici
      byId('room-index').style.opacity = String(1 - smooth(0, 0.3, q));
    }
    scrub.seek(p);
  }
  ScrollTrigger.create({
    trigger: '.room', start: 'top top', end: `+=${1000 * rooms.length}%`, pin: true, scrub: true,
    onUpdate: (s) => drive(s.progress),
    onLeave: () => scene.setDim(0.4), onEnterBack: () => scene.setDim(0),
  });
  gsap.ticker.add(() => {
    if (document.hidden) return;
    if (capOn) {
      // la légende vit dans une zone fixe à gauche, jamais sur l'objet ni sur les listes
      const c = caps[capOn]; c.classList.remove('flip'); c.style.left = ''; c.style.top = '';
    }
    scene.tick();
  });
  const st = () => ScrollTrigger.getAll().find((t) => t.pin);
  const scrollToProgress = (p, cb) => { const s = st(); lenis.scrollTo(s.start + p * (s.end - s.start), { duration: 1.6, onComplete: cb }); };
  const roomStart = (ri) => scrub.durations.slice(0, ri).reduce((a, b) => a + b, 0) / scrub.total;
  byId('rooms-nav').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) scrollToProgress(roomStart(+b.dataset.room) + 0.01); });

  /* survol et sélection */
  const hit = byId('hit'), panel = byId('panel');
  const drag = { on: false, mode: null, x0: 0, y0: 0, moved: false, off: null };
  hit.addEventListener('pointermove', (e) => { if (drag.on && drag.moved) return; const it = scene.hover(e.clientX, e.clientY); cur.setLabel(it ? (selected && selected.id === it.id ? 'Déplacer' : 'Composer') : (selected ? 'Tourner' : '')); });
  hit.addEventListener('pointerleave', () => cur.setLabel(''));
  function select(it) {
    selected = it;
    byId('panel-name').textContent = it.name;
    const rows = byId('panel-rows'); clear(rows);
    it.chosen = it.chosen || it.tint.map(() => 0);
    it.tint.forEach((t, r) => {
      const row = el('div', { class: 'swatch-row' }, el('span', { class: 'lab', text: t.label }));
      t.options.forEach((o, i) => row.append(el('button', { class: `swatch${it.chosen[r] === i ? ' on' : ''}`, type: 'button', 'aria-label': o.name, dataset: { row: r, i } }, el('i', { style: `--sw:${o.hex}` }))));
      row.append(el('span', { class: 'swatch-name', text: t.options[it.chosen[r]].name }));
      rows.append(row);
    });
    if (!it.tint.length) rows.append(el('p', { class: 'panel-note', text: 'Pas d’option, il est parfait comme ça.' }));
    updatePrice();
    panel.setAttribute('aria-hidden', 'false');
    gsap.fromTo(panel, { autoAlpha: 0, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power3.out', overwrite: true });
    scene.focusDolly(it.id);
    byId('room-index').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.id === it.id));
    gsap.to('#room-index, #hint, #rooms-nav', { autoAlpha: 0, duration: 0.3 }); gsap.to('#panel-hint', { autoAlpha: 1, duration: 0.5, delay: 0.3 });
    showCaption(null);
    cur.setLabel('');
  }
  function updatePrice() {
    const it = selected; if (!it) return;
    const total = it.price + it.tint.reduce((s, t, r) => s + (t.options[it.chosen[r]].price || 0), 0);
    byId('panel-price').textContent = it.price ? euro(total) : 'Offert';
  }
  function deselect() {
    if (!selected) return;
    selected = null;
    panel.setAttribute('aria-hidden', 'true');
    gsap.to(panel, { autoAlpha: 0, x: 24, duration: 0.4, ease: 'power2.in', overwrite: true });
    byId('room-index').querySelectorAll('button').forEach((b) => b.classList.remove('on'));
    gsap.to('#room-index, #hint, #rooms-nav', { autoAlpha: 1, duration: 0.4 }); gsap.to('#panel-hint', { autoAlpha: 0, duration: 0.2 });
    drive(progress);
  }
  // glisser : sur l'objet sélectionné, on le déplace sur le sol ; à côté, on le tourne. Un clic court sélectionne.
  hit.addEventListener('pointerdown', (e) => {
    drag.on = true; drag.moved = false; drag.x0 = e.clientX; drag.y0 = e.clientY; drag.mode = null;
    if (selected) {
      const it = scene.hover(e.clientX, e.clientY);
      if (it && it.id === selected.id) {
        const p = scene.floorPoint(e.clientX, e.clientY), g = scene.positionOf(selected.id);
        drag.mode = 'move'; drag.off = p ? { x: g.x - p.x, z: g.z - p.z } : { x: 0, z: 0 };
      } else drag.mode = 'rotate';
    }
    hit.setPointerCapture(e.pointerId);
  });
  hit.addEventListener('pointermove', (e) => {
    if (!drag.on) return;
    if (Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) > 4) drag.moved = true;
    if (!drag.moved || !selected) return;
    if (drag.mode === 'move') { const p = scene.floorPoint(e.clientX, e.clientY); if (p) scene.moveTo(selected.id, p.x + drag.off.x, p.z + drag.off.z); cur.setLabel('Déplacer'); }
    else if (drag.mode === 'rotate') { scene.rotate(selected.id, (e.clientX - drag.x0) * 0.012); drag.x0 = e.clientX; cur.setLabel('Tourner'); }
  });
  const endDrag = (e) => {
    if (!drag.on) return; drag.on = false;
    if (drag.moved) { if (selected) scene.focusDolly(selected.id); return; }
    const it = scene.hover(e.clientX, e.clientY);
    if (it) select(allItems.find((r) => r.id === it.id)); else if (selected) deselect();
  };
  hit.addEventListener('pointerup', endDrag); hit.addEventListener('pointercancel', endDrag);
  byId('panel-close').addEventListener('click', deselect);
  addEventListener('keydown', (e) => { if (e.key === 'Escape') deselect(); });
  byId('room-index').addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    const it = allItems.find((r) => r.id === b.dataset.id);
    const { i, pl } = locate(progress);
    if (i !== it.room || pl < it.at) scrollToProgress(roomStart(it.room) + (it.at + 0.02) * scrub.durations[it.room] / scrub.total, () => select(it));
    else select(it);
  });
  byId('panel-rows').addEventListener('click', (e) => {
    const b = e.target.closest('.swatch'); if (!b || !selected) return;
    const r = +b.dataset.row, i = +b.dataset.i, t = selected.tint[r];
    selected.chosen[r] = i;
    b.parentElement.querySelectorAll('.swatch').forEach((x) => x.classList.toggle('on', x === b));
    b.parentElement.querySelector('.swatch-name').textContent = t.options[i].name;
    scene.setTint(selected.id, t.material, t.options[i].hex);
    updatePrice();
  });

  reveals();
  ScrollTrigger.refresh();
  drive(0);
  gsap.timeline()
    .to(bar, { scaleX: 1, duration: 0.3 })
    .call(() => scene.ready())
    .to('.loader', { opacity: 0, duration: 1, ease: 'power2.inOut' }, '+=0.2')
    .set('.loader', { display: 'none' })
    .from('.top', { y: -14, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
    .from('#hero-kicker', { opacity: 0, y: 10, duration: 0.8 }, '-=0.6')
    .from('#hero-title .ln i', { yPercent: 105, duration: 1.3, ease: 'expo.out', stagger: 0.1 }, '-=0.7')
    .from('#hero-text, .scroll-hint, #hint, #rooms-nav', { opacity: 0, duration: 0.8 }, '-=0.5');
})();
