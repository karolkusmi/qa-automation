import {Then} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import { InventoryPage } from "../../pages/InventoryPage"
import { page } from "./hooks"


Then('I see six products on the inventory page', async() => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.getInventoryItems()).toHaveCount(6);
})

Then('I see that first product is Sauce Labs Backpack', async() => {
    const inventoryPage = new InventoryPage(page)
    await expect(inventoryPage.getInventoryItems().nth(0)).toContainText("Sauce Labs Backpack");
})