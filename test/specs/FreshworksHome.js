const homePage = require("../pageobjects/Freshworkshome.page");

describe("Verify HomePage", function () {
    it("verify home page elements", async function () {
        await browser.url('/')
        let text = await homePage.pageHeader.getText();
        console.log(text);

        let subheading =await homePage.subHeading.getText();
        console.log(subheading);

    
       
    })

    it("Click Demo", async function(){
        await browser.url('/')
        await homePage.freeTrial.click();
        browser.pause(5000);
    })

  
});