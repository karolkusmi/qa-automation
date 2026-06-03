import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

import {CheckoutPage} from '../pages/CheckoutPage';

test.describe("Checkout", () => {

    test("Checkout information is filled and continue button is clicked", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "secret_sauce");
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.goto("https://www.saucedemo.com/cart.html");
        const checkout = new CheckoutPage(page);
        await checkout.clickCheckout();
        await checkout.fillCheckoutInformation("John", "Doe", "12345");
        await checkout.clickContinue();
        await expect (page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
        


    })



})
