import { test, expect,  } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage.ts";

test.describe("Inventory", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secret_sauce");
  });
  test("products title is visible after login", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.getTitle()).toBeVisible();
  });

  test("Inventory shows six products", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.getInventoryItems()).toHaveCount(6);
  });

  test("Verify if the first object contains Sauce Labs Backpack", async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.getInventoryItems().nth(0)).toContainText("Sauce Labs Backpack")
  });
  test("Verify if it has an item called Backpack in the inventory", async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.getInventoryItems().filter({hasText: "Backpack"})).toContainText("Backpack")
  })
});
