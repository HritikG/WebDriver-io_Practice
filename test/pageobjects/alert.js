class AlertPage {
    get result() {
        return $('#result');
    }
 
    getResultText() {
        return this.result.getText();
    }
 
    getAlertButton(index) {
        return $(`ul li:nth-child(${index}) button`);
    }
 
    clickOnAlertButton(index) {
        const alertButton = this.getAlertButton(index);
        alertButton.waitForDisplayed();
        alertButton.click();
    }
}
 
module.exports = new AlertPage();