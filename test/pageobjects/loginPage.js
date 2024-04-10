class LoginPage {
    get username() { return $('#username') };
    get password() { return $('#password') };
    get btn() { return $('button') };

    enterUserName(text) {
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterPassword(text) {
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickOnLogin() {
        this.btn.waitForDisplayed();
        this.btn.click();
    }
}

module.exports = new LoginPage();