import {test, expect} from '@playwright/test'; 

test("products title is visible after login", async({page}) => {
    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.locator('[data-test="login-button"]').click()

   await  expect(page.getByText("Products")).toBeVisible()
})

test('Inventory shows six products', async({page}) => {

    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.locator('[data-test="login-button"]').click()

    await expect(page.locator('.inventory_item')).toHaveCount(6)

})