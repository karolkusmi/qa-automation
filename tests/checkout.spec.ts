import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Checkout", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secret_sauce");
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.goto("https://www.saucedemo.com/cart.html");
    const checkout = new CheckoutPage(page);
    await checkout.clickCheckout();
    await checkout.fillCheckoutInformation("John", "Doe", "12345");
    await checkout.clickContinue();
  });
  test("Checkout information is filled and continue button is clicked", async ({
    page,
  }) => {
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html",
    );
  });
  test("Verify if after completed checkout the URL is correct", async ({
    page,
  }) => {
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html",
    );
  });
});
