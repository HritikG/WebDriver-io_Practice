class LoginPage {
    get username() { return $('#username') };
    get password() { return $('#password') };
    get btn() { return $('button[type="submit"]') };
    // get element(){ return $('//*[@id="content"]/div/h2/text()')}
    // get element2(){return $('//*[@id="content"]/div/img[1]')}

    
    async enterUserName(text) {
        // await this.username.waitForDisplayed();
        await this.username.setValue(text);
    }

    async enterPassword(text) {
        // await this.password.waitForDisplayed();
        await this.password.setValue(text);
    }

    async clickOnLogin() {
        await this.btn.waitForDisplayed();
        await this.btn.click();
    }
}

// export default new LoginPage();
module.exports = new LoginPage();


