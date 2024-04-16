describe('wait for delete button', function(){
    it('should wait for delete button', async function(){
        browser.url('http://the-internet.herokuapp.com/add_remove_elements/');
        await browser.pause(3000);

        const addElement = $('//*[@id="content"]/div/button');
        const deleteElement = $('//*[@id="elements"]/button');

        await addElement.waitForDisplayed();
        addElement.click();

        await deleteElement.waitForExist({ timeout: 4000 });

        expect(await deleteElement.isExisting()).toBeTruthy();

        await deleteElement.waitForDisplayed(); 
        await deleteElement.click();

        expect(await deleteElement.isExisting()).not.toBeTruthy();
    });
});
