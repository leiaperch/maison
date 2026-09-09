// Vérifie sélection, teinte, déplacement et rotation du fauteuil. node tools/interact.mjs
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true, args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1440,810', '--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 810 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 160)); });
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle2', timeout: 180000 });
await page.waitForFunction(() => getComputedStyle(document.querySelector('.loader')).display === 'none', { timeout: 180000 });
await page.evaluate(() => window.scrollTo(0, 1600)); await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: 'tools/i_0.jpg', type: 'jpeg', quality: 80 });
await page.evaluate(() => document.querySelector('#room-index button[data-id="chair"]').click()); await new Promise((r) => setTimeout(r, 2200));
await page.evaluate(() => { const s = document.querySelectorAll('#panel-rows .swatch'); s[2].click(); s[5].click(); }); await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: 'tools/i_1.jpg', type: 'jpeg', quality: 80 });
const drag = async (x0, y0, x1, y1) => { await page.mouse.move(x0, y0); await page.mouse.down(); for (let i = 1; i <= 20; i++) { await page.mouse.move(x0 + (x1 - x0) * i / 20, y0 + (y1 - y0) * i / 20); await new Promise((r) => setTimeout(r, 25)); } await page.mouse.up(); await new Promise((r) => setTimeout(r, 1200)); };
await drag(+process.argv[2] || 520, +process.argv[3] || 560, 380, 620); // sur le fauteuil : déplacer
await drag(300, 250, 520, 250);                                            // à côté : tourner
await page.screenshot({ path: 'tools/i_2.jpg', type: 'jpeg', quality: 80 });
const state = await page.evaluate(() => ({ price: document.getElementById('panel-price').textContent, name: document.getElementById('panel-name').textContent, hint: getComputedStyle(document.getElementById('panel-hint')).opacity }));
console.log(JSON.stringify({ errors, state }));
await browser.close();
