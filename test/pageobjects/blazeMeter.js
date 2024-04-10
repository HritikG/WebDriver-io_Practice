class blazePage {
    get parent() { return $('//*[@id="block-secondarynavigation"]/ul') }

    get childElements() {
        return this.parent.$$('li');
    }


    get getTextForLi() {
        const textArray = [];
        const elements = this.childElements;
        for (let i = 0; i < elements.length; i++) {
            const text = elements[i].getText();
            console.log(text);
            textArray.push(text);
        }
        return textArray;
    }
    

};

module.exports = new blazePage();