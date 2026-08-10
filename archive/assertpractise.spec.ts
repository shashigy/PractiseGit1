import {test, expect} from "@playwright/test"

test("Assert", async({page})=>{
test.slow();
 await page.goto("https://www.saucedemo.com/");
 await expect(page.locator('[data-test="login-button"]')).toHaveCount(2);
 await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
 // await expect(page.locator('[data-test="login-button"]')).toBeDisabled();
 await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled();
 await expect(page.locator('[data-test="login-button"]')).toBeVisible();
 // await expect(page.locator('[data-test="login-button"]')).toBeHidden();
 await expect(page.locator('#login-button')).toHaveText('Login');
 await expect(page.locator('.submit-button.btn_action')).toHaveAttribute('value','Login');
 await expect(page).toHaveTitle("Swag Labs");
 await expect(page).toHaveURL("https://www.saucedemo.com/");

 //non sync function,not recommended by Playwright

 expect(5).not.toBe(4);
 await expect(page).not.toHaveTitle("Google");
 await expect(page, "This is custom message for practise").toHaveTitle("Google");
})