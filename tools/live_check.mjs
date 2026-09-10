// Charge le site publié et mesure le préchargeur et le jeu de nuit : node tools/live_check.mjs [url]
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
const errors = [], bad = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('response', (r) => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });
const t0 = Date.now();
await page.goto('' + (process.argv[2] || 'https://leiaperch.github.io/maison/') + '', { waitUntil: 'networkidle2', timeout: 240000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 240000 }).catch(() => errors.push('loader still on'));
const t1 = (Date.now() - t0) / 1000;
await page.waitForFunction(() => !document.getElementById('mode').disabled, { timeout: 120000 }).catch(() => errors.push('night not ready'));
const t2 = (Date.now() - t0) / 1000;
console.log(JSON.stringify({ errors, bad: bad.slice(0, 5), loaderOff: t1, nightReady: t2 }));
await browser.close();
