describe(" Search", () => {
    it("Innago", async () => {
 
        await browser.url("https://qa-my.innago.com/");
 
        await browser.pause(1000);
        // browser.keys ("\uE007");
        await $('//*[@id="signInModal"]/div[3]/form/div[1]/input').setValue("ten1@yopmail.com");
 
        await browser.pause(1000);
        await $('//*[@id="signInModal"]/div[3]/form/div[2]/input').setValue("Pass@123");
 
        await browser.pause(1000);
        await $('//*[@id="signin-button"]').click();
 

        const high = await $('/html/body/app-root/div/app-header/div/h2');
        console.log(await high.getText());
 
        await browser.execute((elem)=>{
            elem.style.backgroundColor ='yellow';
        },high)
        await browser.pause(5000);
 
 
    });
});