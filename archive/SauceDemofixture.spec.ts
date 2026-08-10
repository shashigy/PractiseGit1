import {test} from "../fixtures/Hooksfixture"


/*test.beforeEach(async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})


test.afterEach(async({page})=>{
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.locator('[data-test="logout-sidebar-link"]').click();

})*/


test ('validate saucedemo', async({loginlogout})=>{

await page.getByText('Swag Labs').isVisible;
await page.locator('[data-test="item-4-title-link"]').isVisible;
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('[data-test="remove-sauce-labs-backpack"]').isVisible();

})