class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.signOutBtn = page.locator(".fa.fa-sign-out");

    }

    async searchProductAddCart(productName) {

        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToOrders() {
        await this.orders.click();
    }


    async navigateToCart() {
        await this.cart.click();
    }

    async logoutUser() {
        await this.signOutBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickViewForProduct(productName) {
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                //click view
                await this.products.nth(i).locator("text= View").click();
                break;
            }
        }
    }

}
module.exports = { DashboardPage };