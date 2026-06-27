import { Given, When, Then } from "@cucumber/cucumber";
import { page, loginPage } from "./hooks";

import {  expect } from "@playwright/test";

Given("I am on the login page", async () => {
  await loginPage.goToLoginPage();
});

When("I log in with valid credentials", async () => {
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

When('I log in with blocked credentials', async() => {
    await loginPage.fillCredentials("locked_out_user","secret_sauce")
})


Then('I should see a locked-out message', async() => {
    await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible();
})
