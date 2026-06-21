import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { Browser, Page, chromium,} from "playwright";
import { LoginPage } from "../../pages/LoginPage";
import {  expect } from "@playwright/test";

let page: Page;
let browser: Browser;
let loginPage: LoginPage;

Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given("I am on the login page", async () => {
  loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
});

When("I login with valid credentials", async () => {
  await loginPage.fillCredentials("standard_user", "secret_sauce");
});

Then('I should see the inventory page', async() => {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})
When('I enter an empty username', async() => {
    await loginPage.fillCredentials("", "secret_sauce");
})
Then('I should see an error message', async() => {
    await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();
})

