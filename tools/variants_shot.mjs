// Sélectionne un objet, passe en revue ses modèles et ses motifs : node tools/variants_shot.mjs <room> <id> <pl>
import puppeteer from 'puppeteer';
const room = +(process.argv[2] || 0), id = process.argv[3] || 'chair', pl = +(process.argv[4] || 0.5);
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message));
await page.goto('http://localhost:5188/?capture', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await page.evaluate((n) => document.querySelector(`#rooms-nav button[data-room="${n}"]`).click(), room);
await new Promise((r) => setTimeout(r, 4000));
await page.evaluate((d) => scrollBy(0, d), (pl - 0.01) * 10 * 810);
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate((id) => document.querySelector(`#room-index button[data-id="${id}"]`).click(), id);
await new Promise((r) => setTimeout(r, 2200));
const shots = [];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const opts = await page.evaluate(() => [...document.querySelectorAll('#panel-rows .opt')].map((b) => ({ v: b.dataset.variant, p: b.dataset.pattern, r: b.dataset.row, t: b.textContent })));
let n = 0;
await page.screenshot({ path: `tools/v_${id}_${n++}.jpg`, type: 'jpeg', quality: 85 }); shots.push('base');
for (const o of opts.filter((o) => o.p && o.p !== 'uni')) { await page.evaluate((r, p) => document.querySelector(`#panel-rows .opt[data-row="${r}"][data-pattern="${p}"]`).click(), o.r, o.p); await wait(700); await page.screenshot({ path: `tools/v_${id}_${n++}.jpg`, type: 'jpeg', quality: 85 }); shots.push('motif ' + o.t); }
for (const o of opts.filter((o) => o.v !== undefined && o.v !== '0')) { await page.evaluate((v) => document.querySelector(`#panel-rows .opt[data-variant="${v}"]`).click(), o.v); await wait(1800); await page.screenshot({ path: `tools/v_${id}_${n++}.jpg`, type: 'jpeg', quality: 85 }); shots.push('modèle ' + o.t); }
console.log(JSON.stringify({ id, errors, shots }));
await browser.close();
