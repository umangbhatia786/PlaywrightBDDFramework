const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');

When('User clicks on signout button', async function () {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.logoutUser();
  });

Then('User is logged out', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.loginPage.validateLogout();
  });