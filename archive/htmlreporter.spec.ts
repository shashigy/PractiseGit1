import {test, expect} from "@playwright/test"

test.beforeEach('title verification', async({page})=> {
await page.goto("https://www.saucedemo.com/");
await expect(page).toHaveTitle('Swag Labs')
}
)

test('successful login', async({page})=>{
await page.locator('[data-test="username"]').fill('standard_user1')
await page.locator('[data-test="password"]').fill('secret_sauce'),
await page.locator('[data-test="login-button"]').click();
await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
}
)

test('unsuccessful login', async({page})=>{
await page.locator('[data-test="username"]').fill('standard_user1')
await page.locator('[data-test="password"]').fill('secret_sauce'),
await page.locator('[data-test="login-button"]').click();
await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
}
)