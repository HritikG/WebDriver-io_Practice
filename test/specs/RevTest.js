describe('Smoke test ', () => {


    it('Verify URL', async () => {
        await browser.url("https://the-internet.herokuapp.com/");
        console.log("Session id is", browser.sessionId);
        console.log("Capabilities", browser.capabilities);
        //toHaveUrl
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/")
        //toHaveUrlContaining
        await expect(browser).toHaveUrl(expect.stringContaining('herokuapp'))
    });

    it("Verify Title", async function () {
        await browser.url("https://the-internet.herokuapp.com/");
        //toHavetitle
        await expect(browser).toHaveTitle("The Internet")
        //toHavetitleContaining
        await expect(browser).toHaveTitle(expect.stringContaining('Internet'))
    })

    it("Login",async function(){
        
    })
}); 