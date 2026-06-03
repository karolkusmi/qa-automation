import {Page, Locator,} from "@playwright/test"

export class CartPage {
    private page: Page;
    private cartTitle: Locator;
    private cartItems: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.locator('[data-test="inventory-item-name"]');
        this.cartItems = page.locator('[data-test="shopping-cart-badge"]');
}
    getCartTitle() {
        return this.cartTitle
    }
    getCartItems() {
        return this.cartItems
    }

}