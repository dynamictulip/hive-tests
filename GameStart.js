const should = require('chai').should();
const {
    assert
} = require('chai');
const {
    chromium
} = require('playwright');

describe('Starting a game', function () {
    let pagePlayerOne;
    let pagePlayerTwo;
    let browser;

    before(async () => {
        browser = await chromium.launch({
            headless: false,
            slowMo: 300
        });

        pagePlayerOne = await loginPlayer(browser, 'uuuuuu', 'pppppppp');
        pagePlayerTwo = await loginPlayer(browser, 'uuuuuu2', 'ppppppp');
    });

    after(async () => {
        //close all tables
        await pagePlayerOne.click('#mygameinprogress_icon');
        await browser.close();
    })

    it('should start', async () => {
        //go to start the game
        await pagePlayerOne.goto('https://studio.boardgamearena.com/lobby?game=5942');
        await pagePlayerOne.click('#joingame_create_5942');
        await pagePlayerOne.click('#open_table_now');

        var tableUrl = await pagePlayerOne.url();
        await pagePlayerTwo.goto(tableUrl);

    })

    describe('with the pillbug', function () {
        beforeEach(async () => {
            //set the pillbug option
        })

        it('should be on each players sideboard', async () => {

            assert.fail();

        });
    });
});

async function loginPlayer(browser, user, pass) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://studio.boardgamearena.com/');
    await page.fill('#username_input', user);
    await page.fill('#password_input', pass);
    await page.click('#submit_login_button');

    await page.waitForSelector('#navbutton_controlpanel');

    return page;
}