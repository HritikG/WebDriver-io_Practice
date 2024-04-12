const CRMPage = require("../pageobjects/moveTo.js")
describe("scroll to element", function () {
    it("should scroll to forgot pwd link", async function () {

        browser.url("https://classic.crmpro.com/");
        await browser.pause(10000);

        console.log("in view port", CRMPage.forgotpwdLink.isDisplayedInViewPort());
        CRMPage.forgotpwdLink.click()

        await browser.pause(1000);
    })
})



