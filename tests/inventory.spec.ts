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
  test("Verify if after adding an item to the cart the counter number is correct", async ({page}) => {
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    await expect(page.locator('[data-test=shopping-cart-badge]')).toHaveText("1");
  })
  test("Verify if the first product from Z to A is correct", async({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortBy("za");
    await expect(inventoryPage.getInventoryItems().nth(0)).toContainText("Test.allTheThings() T-Shirt (Red)")
  })
  test("Verify if the first product is the lowest price after sorting from low to high", async({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortBy("lohi");
    await expect(inventoryPage.getInventoryItems().nth(0)).toContainText("Sauce Labs Onesie")
  })
});
