import { expect} from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./hooks"
import { CartPage } from "../../pages/CartPage";

When('I add a product to the cart', async() => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})

Then('I should see one product in the cart', async() => {
    const cartPage = new CartPage(page);
    await page.goto("https://www.saucedemo.com/cart.html");
    await expect(cartPage.getCartTitle()).toHaveText("Sauce Labs Backpack")
    
})

Given('I go to the cart page', async() =>{
    await page.goto("https://www.saucedemo.com/cart.html");
})

When('I remove the item', async() => {
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
})

Then('I should see an empty cart', async() => {
    const cartPage = new CartPage(page);
    await expect(cartPage.getCartTitle()).not.toBeVisible();
})

When('I add three items to the cart', async() => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
})

Then('I should see three items in the cart', async() => {
    const cartPage = new CartPage(page);
    await expect(cartPage.getCartItems()).toHaveText("3");
})