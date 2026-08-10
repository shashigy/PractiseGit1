import {expect, test} from "@playwright/test"


test('testing reporter', async({page})=>{


await page.goto('https://www.google.com/');
await expect(page.getByRole('search')).toContainText('Google Search')
})


test('testing reporter1', async({page})=>{


await page.goto('https://www.google.com/');
await expect(page.getByRole('search')).toContainText('Google Search')
})
