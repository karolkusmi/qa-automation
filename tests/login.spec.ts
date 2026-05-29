import {test, expect} from '@playwright/test'

test('login with valid credentials', async ({page}) => {
    await page.goto("https://www.saucedemo.com");
 
    await page.getByPlaceholder("Username").fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')


})

test('login with empty username', async ({page}) => {
    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill('');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible()

})

test('login with invalid password', async({page}) => {
    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()

})

test('login with locked user', async({page}) => {

    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill('locked_out_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible()


})