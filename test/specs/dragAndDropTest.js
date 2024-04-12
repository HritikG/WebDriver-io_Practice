describe("drag drop action feature", function () {
    it("do drag and drop", async function () {
        await browser.url("https://jqueryui.com/resources/demos/droppable/default.html");
        await browser.pause(2000);

        const sourceElement = await $('#draggable');
        const targetElement = await $('#droppable');

        // Corrected: Invoke dragAndDrop() on sourceElement
        await browser.pause(1000);

        sourceElement.dragAndDrop(await targetElement);
        browser.pause(4000);
    });
});


describe('checking dragdrop functionality', () => {
    it('dragdrop element', async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        await browser.pause(1000);

        const el = (await $('//*[@id="content"]/ul/li[10]/a'))
        await el.click()
        
        const dragdrop = await $('//*[@id="column-a"]')
        const targe = await $('//*[@id="column-b"]')
        await browser.pause(1000);

        await dragdrop.dragAndDrop(targe);
        await browser.pause(4000);

    })
})