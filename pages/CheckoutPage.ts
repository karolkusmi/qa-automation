import {Page, Locator, } from "@playwright/test"

export class CheckoutPage {
    private page : Page;
    private btnCheckout: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private postalCode: Locator;
    private btnContinue:  Locator;
    
    constructor (page: Page) {
        this.page = page;
        this.btnCheckout = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.btnContinue = page.locator('[data-test="continue"]');

    }
    
     async clickCheckout() {
        await this.btnCheckout.click();
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

    }
    async clickContinue() {
        await this.btnContinue.click();
    }


}


