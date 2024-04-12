// import LoginPage from '../pageobjects/loginPage.js'
// const LoginPage = require("../pageobjects/loginPage.js");
const assert = require('assert');



describe("login", async function () {
    it("Enter Username", async function () {
        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.enterUserName('tomsmith');
        await LoginPage.enterPassword('SuperSecretPassword!');
        await LoginPage.clickOnLogin();
        await browser.pause(2000);

        //Is Existing
        const element = await LoginPage.element;
        console.log(await element.isExisting());

    })

    it.skip('isDisplayed', async function () {
        await browser.url('https://the-internet.herokuapp.com/broken_images');
        const element2 = await LoginPage.element2;

        console.log(await element2.isExisting());

    })

    it.only('should validate a broken image', async () => {
        await browser.url('https://the-internet.herokuapp.com/broken_images');
        const image = await $('img[src="asdf.jpg"]');
        const isBroken = browser.execute(function(img) {
            return ! img.complete || img.naturalWidth === 0;
        }, image);
        
    try{
    assert.strictEqual(isBroken,true);
    console.log("Image Broken");
    }catch{
        console.log("Image is complete");
    }

   });
});