const { expect } = require("@playwright/test");

class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('button:has-text("Add to Cart")');
        this.productName = page.locator('h2');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async verifyProductName(expectedName) {
        const actualName = await this.productName.textContent();
        expect(actualName.trim()).toBe(expectedName);
    }

    async verifyAddToCartButtonIsVisible() {
        await expect(this.addToCartButton).toBeVisible();
    }
}
module.exports = { ProductPage };

// This code defines a ProductPage class for interacting with product pages in an e-commerce application.
// It includes methods to add a product to the cart and navigate to the cart page.
// The class uses Playwright locators to find elements on the page, such as the "Add to cart" button and the cart icon.
// The methods are asynchronous, allowing for smooth interaction with the page elements.
// The ProductPage class can be used in test automation scripts to verify product functionality, such as adding items to the cart and checking the cart contents.
// The class is exported for use in other modules, such as test scripts or page object managers.
// The ProductPage class is part of a page object model, which helps in organizing code for better maintainability and readability in test automation.