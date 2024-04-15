import LoginPage from '../pageobjects/locatorWithoutGet.js'
describe("login", async function () {
    it("Enter Username", async function () {
        await browser.url('https://the-internet.herokuapp.com/login');
        await browser.pause(2000);
        await LoginPage.enterUserName('tomsmith');
        await LoginPage.enterPassword('SuperSecretPassword!');
        await LoginPage.clickOnLogin();
        await browser.pause(2000);
    })
})