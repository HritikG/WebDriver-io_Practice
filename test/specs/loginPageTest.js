const loginPage = require("../pageobjects/loginPage");

describe("login",function(){
    it("Enter Username",async function(){
        browser.url('https://the-internet.herokuapp.com/login');
        loginPage.enterUserName('tomsmith');
        await assert.equal('tomsmith',loginPage.username.getValue());
    })

    it("Enter Pass", async function(){
        loginPage.enterPassword('SuperSecretPassword!');
        await assert.equal('SuperSecretPassword!',loginPage.password.getValue());
    })

    it("Click Button", async function(){
        await loginPage.btn();
    })


});