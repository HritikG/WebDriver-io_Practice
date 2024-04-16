describe('Button Enable/Disable', () => {
    const url = 'https://classic.freecrm.com/register/';

    beforeEach(() => {
        browser.url(url);
    });

    it('should toggle submit button state with checkbox click', async () => {
        const checkBox = $("//input[@name='agreeTerms']");
        const submitBtn = $('#submitButton');
        
        await checkBox.click();
        await submitBtn.waitForEnabled({ timeout: 4000 });
        
        expect(await submitBtn.isEnabled()).toBeTruthy();
        
        await checkBox.click();
        await submitBtn.waitForEnabled({ timeout: 4000, reverse: true });
        
        expect(await submitBtn.isEnabled()).toBeFalsy();
    });
});
