const assert = require('assert');

describe('Button Enable/Disable', async function () {
    const url = 'https://classic.freecrm.com/register/';
    beforeEach(async function () {
        await browser.url(url);
    });

    it('should wait for button to enable after checkbox click', async function () {
        const checkBox = $("//input[@name='agreeTerms']");
        const submitBtn = $('#submitButton');
        await checkBox.click();
        await submitBtn.waitForEnabled(4000);
        assert.equal(true, await submitBtn.isEnabled());
    });

    it('should wait for button to disable after checkbox unclick', async function () {
        const checkBox = $("//input[@name='agreeTerms']");
        const submitBtn = $('#submitButton');
        await checkBox.click();
        await submitBtn.waitForEnabled(4000);
        assert.equal(true, await submitBtn.isEnabled());
        await checkBox.click();
    })
})