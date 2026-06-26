import { Page, Browser, chromium } from "playwright";
import { Before, After } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/LoginPage";

export let page: Page;
export let browser: Browser;
export let loginPage: LoginPage;

Before(async() => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page); 
})

After(async() => {
    await browser.close();
})

