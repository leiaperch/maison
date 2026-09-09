// Moteur de scrub : le scroll pilote la lecture d'une vidéo pré-rendue.
// Chaque clip est chargé en Blob (les hébergeurs statiques ne servent pas
// toujours les requêtes byte-range, et sans elles `seekable` reste vide et
// toute recherche retombe sur la première image). Les clips s'enchaînent
// bout à bout : le temps global du scroll se traduit en (clip, temps local).

// `clips` s'enchaînent bout à bout et portent la progression du scroll.
// `links` sont des plans de liaison (le couloir) : chargés et cherchés de la même
// façon, mais hors de la chaîne — c'est la transition qui décide de leur temps.
export async function createScrub({ clips, links = [], onProgress = () => {} }) {
  const host = document.createElement('div');
  host.className = 'scrub';
  document.body.prepend(host);

  let loaded = 0;
  const load = async (c, i) => {
    const head = await fetch(c.src, { method: 'HEAD' }).catch(() => null);
    // le serveur de dev renvoie la page d'accueil pour un fichier absent : on exige un type vidéo
    if (!head || !head.ok || !(head.headers.get('content-type') || '').startsWith('video')) { console.warn('clip absent, ignoré :', c.src); loaded++; onProgress(loaded / clips.length); return null; }
    const v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.preload = 'auto'; v.defaultMuted = true;
    v.className = 'scrub-video';
    if (c.poster) v.poster = c.poster;
    const small = window.innerWidth < 900 && c.src.endsWith('.mp4') ? c.src.replace(/\.mp4$/, '.720.mp4') : null;
    const res = await (small ? fetch(small).then((r) => (r.ok && (r.headers.get('content-type') || '').startsWith('video') ? r : fetch(c.src))) : fetch(c.src));
    const blob = await res.blob();
    v.src = URL.createObjectURL(blob);
    await new Promise((r) => { v.addEventListener('loadedmetadata', r, { once: true }); v.load(); });
    loaded++; onProgress(loaded / clips.length);
    v.dataset.clip = i;
    return v;
  };
  const all = [...clips, ...links];
  const every = (await Promise.all(all.map(load))).filter(Boolean);
  const videos = every.filter((v) => +v.dataset.clip < clips.length);
  const linkVideos = every.filter((v) => +v.dataset.clip >= clips.length);
  every.forEach((v) => host.append(v)); // dans l'ordre des clips, quel que soit l'ordre de chargement
  const durations = videos.map((v) => clips[+v.dataset.clip].duration || v.duration);
  const total = durations.reduce((a, b) => a + b, 0);

  // iOS n'affiche rien tant qu'une vidéo muette n'a pas été lue une fois
  const prime = () => { every.forEach((v) => { v.play().then(() => v.pause()).catch(() => {}); }); window.removeEventListener('touchstart', prime); };
  window.addEventListener('touchstart', prime, { passive: true });

  // Le fondu enchaîné affiche deux clips à la fois : celui qu'on quitte et celui
  // qu'on rejoint. Une vidéo Blob jamais cherchée n'a aucune image décodée et
  // sortirait noire dans le fondu — on force donc une première image partout.
  await Promise.all(every.map((v) => new Promise((r) => {
    if (v.readyState >= 2 && v.currentTime > 0) return r();
    const done = () => { v.removeEventListener('seeked', done); r(); };
    v.addEventListener('seeked', done);
    setTimeout(done, 1500);
    v.currentTime = 0.04;
  })));

  let current = 0, target = 0, active = 0, raf = 0;
  const show = (i) => { if (i === active) return; videos[active].classList.remove('on'); videos[i].classList.add('on'); active = i; };
  videos[0].classList.add('on');

  // un seul saut à la fois : on attend que le décodeur ait fini avant d'en
  // demander un autre, sinon les sauts s'empilent et l'image se fige
  every.forEach((v) => { v.dataset.busy = '0'; v.addEventListener('seeked', () => { v.dataset.busy = '0'; }); });
  let busySince = 0;
  // un seul saut à la fois par vidéo, avec garde-fou : un saut sans « seeked »
  // pendant 300 ms est considéré perdu
  const seekTo = (v, t) => {
    const clamped = Math.min(Math.max(t, 0), v.duration - 0.04);
    if (v.dataset.busy === '1' && performance.now() - busySince > 300) v.dataset.busy = '0';
    if (v.dataset.busy === '1' || v.seeking) return;
    if (Math.abs(v.currentTime - clamped) > 0.012) { v.dataset.busy = '1'; busySince = performance.now(); v.currentTime = clamped; }
  };
  const apply = (t) => {
    let i = 0, local = t;
    while (i < durations.length - 1 && local > durations[i]) { local -= durations[i]; i++; }
    show(i);
    seekTo(videos[i], Math.min(local, durations[i] - 0.04));
  };
  const loop = () => {
    current += (target - current) * 0.12;
    if (Math.abs(target - current) < 0.002) current = target;
    apply(current);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return {
    total, durations, videos, linkVideos,
    // temps d'un plan de liaison, en 0..1 sur sa durée
    seekLink(i, p) { const v = linkVideos[i]; if (v) seekTo(v, Math.min(Math.max(p, 0), 1) * (v.duration - 0.05)); },
    // progression 0..1 sur toute la chaîne
    seek(p) { target = Math.min(Math.max(p, 0), 1) * total; },
    // instantané, sans lissage (au chargement)
    jump(p) { target = current = p * total; apply(current); },
    time: () => current,
    destroy() { cancelAnimationFrame(raf); videos.forEach((v) => URL.revokeObjectURL(v.src)); host.remove(); },
  };
}
