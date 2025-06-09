const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');

// Given('A login to Ecom application with {string} and {string}', {timeout: 100*1000}, async function (user, pass) {
//     // Write code here that turns the phrase above into concrete actions
//     const products = this.page.locator(".card-body");
//     const loginPage = this.poManager.getLoginPage();
//     await loginPage.goTo();
//     await loginPage.validLogin(user,pass);
// });

When('Add item {string} to cart', {timeout: 100*1000}, async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();

});


Then('Verify {string} is added to cart', {timeout: 100*1000}, async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid billing details and place the Order', {timeout: 100*1000}, async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order is present in the Orders History Page', {timeout: 100*1000}, async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});