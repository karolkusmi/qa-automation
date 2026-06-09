import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";

import {CheckoutPage} from "../pages/CheckoutPage";

test.describe("End to end test", () => {
    test("Verify End to End from login to checkout", async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user","secret_sauce");
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.goto("https://www.saucedemo.com/cart.html");
        const checkout= new CheckoutPage(page);
        await checkout.clickCheckout();
        await checkout.fillCheckoutInformation("karol", "kus", "1222");
        await checkout.clickContinue();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!")
    })

})