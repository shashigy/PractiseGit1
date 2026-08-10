import { test as baseTest } from "@playwright/test"


type MyLoginLogout = {
    loginlogout: any;
    
}

export const test= baseTest.extend<MyLoginLogout>({

    loginlogout: async({page},use)=>{

        const loginlogout = undefined;  
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await use(loginlogout);

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    }})

export {expect} from "@playwright/test";