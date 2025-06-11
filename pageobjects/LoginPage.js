const {expect} = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");

    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password) {
        await this.userName.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async validateLogout() {
        await expect(this.signInbutton).toBeVisible();
        await expect(this.userName).toBeVisible();
        await expect(this.password).toBeVisible();
    }

}
module.exports = { LoginPage };