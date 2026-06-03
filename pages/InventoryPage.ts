import {Page, Locator, } from "@playwright/test"

export class InventoryPage {
   private page : Page; 
   private title: Locator;
   private inventoryItems: Locator;

   constructor(page: Page) {
    this.page = page;
    this.title = page.getByText("Products");
    this.inventoryItems = page.locator(".inventory_item");
   }

   getTitle() {
    return this.title
   }

   getInventoryItems() {
    return this.inventoryItems
   }
}
