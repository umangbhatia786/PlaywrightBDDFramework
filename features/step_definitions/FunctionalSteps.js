const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('User clicks on signout button', async function () {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.logoutUser();
});

Then('User is logged out', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.loginPage.validateLogout();
});


When('User clicks on a View button for {string}', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.productName = productName;
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.clickViewForProduct(this.productName);

});

Then('Verify User is able to view the product details', async function () {
  // Write code here that turns the phrase above into concrete actions
  this.productPage = this.poManager.getProductPage();
  await this.productPage.verifyProductName(this.productName);
});

Then('User has option to add the product to the cart', async function () {
  // Write code here that turns the phrase above into concrete actions
   await this.productPage.verifyAddToCartButtonIsVisible();
});

When('User adds {string} to the cart', async function (product) {
  // Write code here that turns the phrase above into concrete actions
  this.product = product;
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(product);
  await this.dashboardPage.navigateToCart();
});

Then('User is able to view the product in the cart', async function () {
  // Write code here that turns the phrase above into concrete actions
  this.cartPage = this.poManager.getCartPage();
  await this.cartPage.VerifyProductIsDisplayed(this.product);
});

Then('User is able to remove the product from the cart', function () {
  // Write code here that turns the phrase above into concrete actions
  this.cartPage.removeProductFromCart();
});

Then('User is able to view the cart as empty', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.cartPage.VerifyCartIsEmpty();
});

