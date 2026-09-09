// Banc headless : erreurs, cadence, captures à chaque section, test des
// interactions (rotation, nuancier, survol dans la pièce). node tools/check.mjs
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,900', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 240)); });
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1500));
const H = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
const fps = await page.evaluate(async () => { let f = 0; const t = performance.now() + 2000; await new Promise((r) => { const c = () => { f++; performance.now() < t ? requestAnimationFrame(c) : r(); }; requestAnimationFrame(c); }); return f / 2; });
const shots = {};
async function at(name, y, extra) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 1800));
  if (extra) await extra();
  await page.screenshot({ path: `tools/shot_${name}.jpg`, type: 'jpeg', quality: 80 });
  shots[name] = y;
}
await at('hero', 0);
await at('object1', 1000);
await at('object2', 2000);
await at('object3', 2900);
await at('materials', 3900, async () => {
  await page.evaluate(() => { document.querySelectorAll('.swatch')[2].click(); document.querySelectorAll('.swatch')[5].click(); });
  await new Promise((r) => setTimeout(r, 1200));
});
await at('room', 5200, async () => { await page.mouse.move(820, 520); await new Promise((r) => setTimeout(r, 600)); });
await at('room2', 6600, async () => { await page.mouse.move(700, 500); await page.mouse.click(700, 500); await new Promise((r) => setTimeout(r, 1500)); });
await at('atelier', H - 1400);
await at('contact', H);
const state = await page.evaluate(() => ({ price: document.getElementById('price').textContent, label: document.getElementById('room-label').style.opacity, hv: document.getElementById('hero-video').currentTime, canvasOpacity: getComputedStyle(document.getElementById('gl')).opacity }));
console.log(JSON.stringify({ H, fps, errors: errors.slice(0, 10), state, shots }));
await browser.close();
