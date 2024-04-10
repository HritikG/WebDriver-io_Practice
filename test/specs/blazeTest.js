const blazePage = require("../pageobjects/blazeMeter");

describe("Blaze page Navbar", function () {
    [
        it("Get texts of all main links", async function () {
            await browser.url('https://www.blazemeter.com');
            const linkTexts = await blazePage.getTextForLi();
            console.log(linkTexts);
        })
    ]
})
