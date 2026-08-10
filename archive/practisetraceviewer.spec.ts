import {test} from "@playwright/test"

test('Practising locater', async({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@name='user-name']").fill('standard_user');
await page.locator('input[name=password]').fill('secret_sauce');
await page.locator('input.submit-button').click()
await page.locator("text=Sauce Labs Backpacks").click()
await page.locator('id=add-to-cart').click()

})