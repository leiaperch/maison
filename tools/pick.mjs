// Clique un objet dans l'index de la pièce : le panneau s'ouvre et la caméra se
// recadre dessus. Sert à vérifier qu'un objet existe et où il est.
//   node tools/pick.mjs <room> <id>
import puppeteer from 'puppeteer';
const room = +(process.argv[2] || 0), id = process.argv[3];
const b = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required','--window-size=1440,810','--use-gl=angle','--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 810 });
const errs = []; p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
p.on('console', (m) => { if (m.type() === 'warning' || m.type() === 'error') errs.push(m.type() + ': ' + m.text().slice(0, 200)); });
await p.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await p.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1200));
await p.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
await new Promise((r) => setTimeout(r, 5000));
const found = await p.evaluate((i) => { const btn = document.querySelector(`#room-index button[data-id="${i}"]`); if (!btn) return false; btn.click(); return true; }, id);
await new Promise((r) => setTimeout(r, 6000));
await p.screenshot({ path: `tools/pick_${id}.jpg`, type: 'jpeg', quality: 85 });
console.log(JSON.stringify({ room, id, found, errs: errs.slice(0, 6) }));
await b.close();
