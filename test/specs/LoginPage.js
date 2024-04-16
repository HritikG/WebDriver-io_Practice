describe("LoginPage", () => {
  it("tests LoginPage", async () => {
    await browser.setWindowSize(1920, 542)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").doubleClick()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"login\"]/div[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/ Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  });
});
