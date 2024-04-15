const alertpage = require("../pageobjects/alert.js")
const assert = require("assert")
//const AlertPage=require("../pageobjects/alertpage")
describe("handle alert pop ups", function () {
    it('accept alert', async function () {
 
 
        browser.url("http://the-internet.herokuapp.com/javascript_alerts")
        await browser.pause(10000)
 
        alertpage.clickOnAlertButton(1)
        const alertText = await browser.getAlertText()
        console.log(alertText)
        assert.equal('I am a JS Alert', alertText)
        browser.acceptAlert()
        console.log(alertpage.getResultText)
        assert.equal("You successfully clicked an alert", await alertpage.getResultText())
        await browser.pause(3000)
    })
})
 