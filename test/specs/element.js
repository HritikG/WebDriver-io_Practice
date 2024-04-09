describe("Interaction With web element", function () {
    it("Enter value in a field", async function () {

        await browser.url('https://www.amazon.com');
        await browser.pause(5000);
        const search = await $('//*[@id="twotabsearchtextbox"]')

        await search.setValue('Apple Mac Book');
        await browser.pause(5000);

        $('//*[@id="nav-search-submit-button"]').click()
        await browser.pause(5000);

        const product = await $('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]/h2/a/span');

        let text = await product.getText();
        console.log(text);


    });
    it.only("Get text of a field", async function(){
        try {
            await browser.url('https://www.amazon.com');
            const field = await $('//*[@id="CardInstanceYv4T2RJSIuxEHtIq6FnpVA"]');
            if (!field) {
                throw new Error("Element not found");
            }
            let text2 = await field.getText();
            console.log(text2);
        } catch (error) {
            console.error("Error occurred:", error.message);
        }
    });
    

    
});