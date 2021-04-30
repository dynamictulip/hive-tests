// var should = require('chai').should()
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
        const playerOneContext = await browser.newContext();
        pagePlayerOne = await playerOneContext.newPage();
        //login each player

        const playerTwoContext = await browser.newContext();
        pagePlayerTwo = await playerTwoContext.newPage();
        pagePlayerOne = login(playerOneContext);
        //login each player

            await pagePlayerOne.goto('https://studio.boardgamearena.com/');
            await pagePlayerTwo.goto('https://studio.boardgamearena.com/');
    });
    
    beforeEach(async () => {
        //go to start the game
    })
    
    after(async () => {
        await browser.close();
    })

    describe('with the pillbug', function () {
        beforeEach(async ()=>{
            //set the pillbug option
        })
        it('should be on each players sideboard', async () => {

            assert.fail();

        });
    });
});