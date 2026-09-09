// Capture de calage : la grille au sol (?calib) doit épouser le parquet de la vidéo.
// node tools/calib.mjs "fov=54&height=1.35&pitch=-7"
import puppeteer from 'puppeteer';
const q = process.argv[2] || '';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810 });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
await page.goto(`http://localhost:5188/?capture&${q}`, { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await new Promise((r) => setTimeout(r, 1500));
await page.evaluate((y) => window.scrollTo(0, y), +(process.argv[3] || 2600));
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: 'tools/calib.jpg', type: 'jpeg', quality: 80 });
console.log(JSON.stringify({ errors }));
await browser.close();
