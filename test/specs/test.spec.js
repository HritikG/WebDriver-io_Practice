describe("Google Search", () => {
    it("Searches for 'Hritik' on Google", async () => {
        // Open Google homepage
        await browser.url("https://www.google.com/");

        // Find the search bar and type 'Hritik'
        await $('[name ="q"]').setValue("Hritik");

        // Wait for 2 seconds to allow the search results to load
        await browser.pause(2000);

        // Click the search button
        await $('[name ="btnK"]').click();
    });
});
