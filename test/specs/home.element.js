const homePage = require("../pageobjects/home.page");

describe("Home Page elements handle", function () {
    it("verify home page elements", async function () {
        await browser.url('/')
        let text = await homePage.pageHeader.getText();
        console.log(text);
    })
})