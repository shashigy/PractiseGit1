import test from "@playwright/test";

test("get by method", async({page})=>{
//await page.goto('https://demo.nopcommerce.com/login'),
//await page.getByLabel('Email', {exact:false}).fill('testcodeautomate@gmail.com')
//await page.getByPlaceholder('Search store').fill('mobile')
//console.log(await page.getByText('New Cust').textContent())
await page.goto('https://demo.nopcommerce.com'),
//await page.getByAltText('nopCommerce demo store').click()
await page.getByTitle('Show products in category Electronics').first().click()

})