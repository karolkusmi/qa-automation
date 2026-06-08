import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.describe("Cart", () => {
    test.beforeEach(async ({page}) => {
       const loginPage = new LoginPage(page);
       await loginPage.login("standard_user", "secret_sauce");
    });
    test("Cart title is visible after adding item to cart", async({page}) => {
        const cartPage = new CartPage(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.goto("https://www.saucedemo.com/cart.html");
        await expect(cartPage.getCartTitle()).toBeVisible();
     });
     test("Cart items shows 1 item", async({page}) => {
        const cartPage = new CartPage(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(cartPage.getCartItems()).toHaveText("1");
 })
     test("verify if after adding an item to the cart the URL is correct", async ({page}) => {
        const cartPage = new CartPage(page);
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
        
     })
     test("Verify if the item we select is the same in  the cart", async({page}) => {
      const cartPage = new CartPage(page);
      await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
      await page.goto("https://www.saucedemo.com/cart.html");
      await expect(cartPage.getCartTitle()).toHaveText("Sauce Labs Bolt T-Shirt");
     })
})