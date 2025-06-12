const { test, expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");
        this.removeProduct = page.locator(".fa.fa-trash-o");
        this.cartEmptyMessage = page.locator("h1");

    }

    async VerifyProductIsDisplayed(productName) {

        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();

    }

    async Checkout() {
        await this.checkout.click();
    }

    async removeProductFromCart() {
        await this.removeProduct.click();
        await this.page.waitForLoadState('networkidle');
    }
    
    async VerifyCartIsEmpty() {
        expect(await this.cartEmptyMessage.nth(1).textContent()).toContain("No Products in Your Cart !");
    }

    getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");
    }

}
module.exports = { CartPage };