const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    // Create pages, interact with UI elements, assert values
    const page = await browser.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    await browser.close();
})();