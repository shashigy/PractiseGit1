import {test, expect} from "@playwright/test"


test('type fill into google field', async({page})=>{

await page.goto("https://www.google.com/")
await page.getByRole('combobox', { name: 'Search' }).fill('playwright')
//await page.locator('#APjFqb').pressSequentially("Playwright", {delay:500})
// await page.getByRole('combobox', { name: 'Search' }).press('Backspace')
await page.locator('#APjFqb').press("ArrowDown+ArrowDown+ArrowDown")
})