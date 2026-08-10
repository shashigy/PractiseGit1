import {test, expect} from "@playwright/test"

test('debuggung test 1', async({page})=>{
 
await page.goto('https://demo.nopcommerce.com/login')

})

test('debuggung test 2', async({page})=>{
 
await page.goto('https://demo.nopcommerce.com/login')
const url =page.url();
await page.locator('.email').fill('test@test.com')
await page.locator('.password').fill('test1234')
await page.getByRole('button', { name: 'Log in' }).click();

})