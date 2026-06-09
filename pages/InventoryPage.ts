import {Page, Locator, } from "@playwright/test"

export class InventoryPage {
   private page : Page; 
   private title: Locator;
   private inventoryItems: Locator;
   private sortDropdown: Locator;

   constructor(page: Page) {
    this.page = page;
    this.title = page.getByText("Products");
    this.inventoryItems = page.locator(".inventory_item");
    this.sortDropdown = page.locator('[data-test="product-sort-container"]')
   }

   getTitle() {
    return this.title
   }

   getInventoryItems() {
    return this.inventoryItems
   }

   async sortBy(option: string) {
       return await this.sortDropdown.selectOption(option);
   }
}
