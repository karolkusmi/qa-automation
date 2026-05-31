import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login", () => {
  test("login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("login with empty username", async ({ page }) => {
   const loginPage = new LoginPage(page);
    await loginPage.login("", "secret_sauce");
    await expect(
      page.getByText("Epic sadface: Username is required"),
    ).toBeVisible();
  });

  test("login with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secr");
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service",
      ),
    ).toBeVisible();
  });

  test("login with locked user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("locked_out_user", "secret_sauce");
    await expect(
      page.getByText("Epic sadface: Sorry, this user has been locked out."),
    ).toBeVisible();
  });
});
