import {Page, Locator} from "@playwright/test"

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole("textbox", {name: "Username"});
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator('[data-test="login-button"]');
    }


    async login(username: string, password: string ) {
        await this.page.goto("https://www.saucedemo.com");
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        
    }
}
