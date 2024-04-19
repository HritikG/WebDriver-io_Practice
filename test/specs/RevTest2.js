describe('Interacting With Elements', function () {

    it('Filling form', async function () {
        await browser.url("https://the-internet.herokuapp.com/login");
        await browser.maximizeWindow();
        await browser.pause(4000);
        const username = await $('input[id="username"]')

        // setValue clears previous valaue and set new value
        // await username.setValue('Hritik');

        //add the value in the selector 
        // await username.addValue("Garg");
        // await browser.pause(4000);

        //clears the value
        // await username.clearValue();
        // await browser.pause(4000);

        //getValue of a selector
        // const value = await username.getValue();
        // console.log('username is ', value);

        const button = await $('//*[@id="login"]/button');

        // const enableStatus = await button.isEnabled();
        // const diplayStatus = await button.isDisplayed();
        // console.log('Enable',enableStatus);
        // console.log('Display',diplayStatus);


        const clickStatus = await button.isClickable();
        console.log('Clickable',clickStatus);
        await expect(button).toBeClickable();
        await expect(button).toBeEnabled();
        await expect(button).toBeDisplayed();

        //getting a particular attribute of button
        const buttonAttribute = await button.getAttribute("class");
        console.log("text is",buttonAttribute);

        //capture css of a webElement
        const buttonCss = await button.getCSSProperty('display');       
        
        console.log(buttonCss.value);
        console.log(buttonCss.property);
        console.log(buttonCss);

        //404
        await expect(buttonCss.value).isEqual('inline-block');

        
    })
}) 