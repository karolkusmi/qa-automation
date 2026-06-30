import { Given, When, Then } from "@cucumber/cucumber";
import { page, loginPage } from "./hooks";

import { expect } from "@playwright/test";

Given("I am on the login page", async () => {
  await loginPage.goToLoginPage();
});

When(
  "I log in with {string} and {string}",
  async (username: string, password: string) => {
    await loginPage.fillCredentials(username, password);
  },
);

Then("I should see {string}", async (result: string) => {
  if (result === "inventory page") {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  } else if (result === "error message") {
    await expect(
      page.getByText("Epic sadface: Username is required"),
    ).toBeVisible();
  } else if (result === "locked_out message") {
    await expect(
      page.getByText("Epic sadface: Sorry, this user has been locked out."),
    ).toBeVisible();
  }
});
