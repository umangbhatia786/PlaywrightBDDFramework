const { After, Before, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');

Before({ timeout: 100 * 1000, name: "Setting up the browser and page object manager context", order:1, tags:"@EcomTest"}, async function () {

    this.browser = await playwright.chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);
});

Before({ timeout: 100 * 1000, name: "Login into the Ecom application", order:2, tags:"@EcomTest"}, async function () {

    const products = this.page.locator(".card-body");
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin("umangbhatia1993@gmail.com","Abcd@12345");
});

AfterStep({ timeout: 100 * 1000, name: "Take a screenshot after step if it fails", tags:"@EcomTest"}, async function ({result}) {
    if (result.status === Status.FAILED) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotPath = `./screenshot/stepfail_${timestamp}.png`;
        await this.page.screenshot({ path: screenshotPath });
    }
});