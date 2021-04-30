const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const playerOneContext = await browser.newContext();
    const playerTwoContext = await browser.newContext();
    const pagePlayerOne = await playerOneContext.newPage();
    const pagePlayerTwo = await playerTwoContext.newPage();
    await pagePlayerOne.goto('https://studio.boardgamearena.com/');
    await pagePlayerTwo.goto('https://studio.boardgamearena.com/');
    await browser.close();
})();