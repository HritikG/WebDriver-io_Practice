class blazePage {

    get parent() { return $('//*[@id="block-mainnavigationmegamenu"]/ul') }

    get childElements() {
        return this.parent.$$('li');
    }

    async getTextForLi() {
        const textArray = [];
        const elements = await this.childElements;

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].getText();
            console.log(text);
            textArray.push(text);
        }
        return textArray;
    }

};

module.exports = new blazePage();
