// Captures real screenshots of each live project for the portfolio cards.
// Run by .github/workflows/screenshots.yml; output goes to assets/projects/.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const OUT = 'assets/projects';
const desktop = { width: 1280, height: 800 };
const phone = { width: 390, height: 844 };

// Flutter apps are phone-shaped, so they are captured at phone size.
const shots = [
  { name: 'bank-reconciliation', url: 'https://nainezz.github.io/bank-reconciliation/', viewport: desktop, wait: 2000 },
  { name: 'phone-price-checker', url: 'https://nainezz.github.io/phone-price-checker/', viewport: desktop, wait: 2000 },
  { name: 'myshop', url: 'https://nainezz.github.io/MyShop/', viewport: phone, wait: 12000 },
  { name: 'meals', url: 'https://nainezz.github.io/restaurentprojcet/', viewport: phone, wait: 12000 },
  { name: 'todolist', url: 'https://nainezz.github.io/todolist/', viewport: phone, wait: 12000 },
  { name: 'abda', url: 'https://nainezz.github.io/login-form/', viewport: phone, wait: 25000 },
  { name: 'weather', url: 'https://nainezz.github.io/weatherApp/', viewport: phone, wait: 15000 },
  { name: 'provider-demo', url: 'https://nainezz.github.io/providerTest/', viewport: phone, wait: 12000 },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
for (const s of shots) {
  const context = await browser.newContext({
    viewport: s.viewport,
    deviceScaleFactor: 2,
    // Weather app asks for location: give it Nairobi.
    geolocation: { latitude: -1.2921, longitude: 36.8219 },
    permissions: ['geolocation'],
    colorScheme: 'dark',
    // A normal desktop Chrome identity; some public APIs block automated browsers.
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'en-KE',
  });
  const page = await context.newPage();
  try {
    await page.goto(s.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(s.wait);
    await page.screenshot({ path: `${OUT}/${s.name}.png` });
    console.log(`ok   ${s.name}`);
  } catch (e) {
    console.log(`FAIL ${s.name}: ${e.message}`);
  }
  await context.close();
}
await browser.close();
