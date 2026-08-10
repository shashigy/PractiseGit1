/*import { chromium, expect } from "@playwright/test";
import path from "path";

async function globalsetup(){

const browsers= await chromium.launch();
const browserscontext = await browsers.newContext();
const page= await browserscontext.newPage();
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.getByText('Username : Admin').click();
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByRole('heading',{name: 'Dashboard'})).toBeVisible();
      await page.context().storageState({path:"./playwright/.auth/auth.json"})
}

export default globalsetup; */