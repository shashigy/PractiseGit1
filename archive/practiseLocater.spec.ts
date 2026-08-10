import {test} from "@playwright/test"

test('Practising locater', async({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@name='user-name1']").fill('standard_user');
await page.locator('input[name=password]').fill('secret_sauce');
await page.locator('input.submit-button').click()
await page.locator("text=Sauce LABS Backpacks").click()
await page.locator('id=add-to-cart').click()

})

test('alternate selecting the locaters', async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('.form_group', {has:page.locator('#user-name')}).click()
    await page.locator('.form_group', {has:page.locator('#user-name')}).pressSequentially('standard_user')
    await page.locator('.form_group', {hasNot:page.locator('#user-name')}).click()
    await page.locator('.form_group', {hasNot:page.locator('#user-name')}).pressSequentially('secret_sauce')
    await page.locator('input[id=login-button]').click()
    //await page.locator('//a',{hasText:'Sauce Labs Backpack'}).click()
    await page.locator('.inventory_item_name ',{hasNotText: /Sauce.*/}).click()



})