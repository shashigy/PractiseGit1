/*import {test, expect} from "@playwright/test";

import data1 from "../testdata/testdata.json";
import logindata from "../testdata/login.json";


test.beforeEach('login',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'username' }).click();
await page.getByRole('textbox', { name: 'username' }).fill(logindata.username);
await page.getByRole('textbox', { name: 'password' }).click();
await page.getByRole('textbox', { name: 'password' }).fill(logindata.password);
await expect(page.getByRole('button')).toContainText('Login');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
})

data1.forEach((data)=>{
test(`addcandidate ${data.FirstName}`, async({page})=>{
await page.getByRole('link', { name: 'Recruitment' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.getByRole('textbox', { name: 'First name' }).click();
await page.getByRole('textbox', { name: 'First name' }).fill(data.FirstName);
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill(data.LastName);
await page.getByRole('textbox', { name: 'Type here' }).first().click();
await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email);
await page.getByRole('button', { name: 'Save' }).click();
//await expect(page.locator('#app')).toContainText('Application Stage');

})})*/

/*for(const data of data1){
test(`addcandidate1 ${data.FirstName}`, async({page})=>{
await page.getByRole('link', { name: 'Recruitment' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.getByRole('textbox', { name: 'First name' }).click();
await page.getByRole('textbox', { name: 'First name' }).fill(data.FirstName);
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill(data.LastName);
await page.getByRole('textbox', { name: 'Type here' }).first().click();
await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email);
await page.getByRole('button', { name: 'Save' }).click();
//await expect(page.locator('#app')).toContainText('Application Stage');

})

}*/



import {test, expect} from "./datafixture";

import data1 from "../testdata/testdata.json";
import logindata from "../testdata/login.json";


test.beforeEach('login',async({page, logindata})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'username' }).click();
await page.getByRole('textbox', { name: 'username' }).fill(logindata.Uname);
await page.getByRole('textbox', { name: 'password' }).click();
await page.getByRole('textbox', { name: 'password' }).fill(logindata.Pwd);
await expect(page.getByRole('button')).toContainText('Login');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
})


test('addcandidate', async({page, testdata})=>{
await page.getByRole('link', { name: 'Recruitment' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.getByRole('textbox', { name: 'First name' }).click();
await page.getByRole('textbox', { name: 'First name' }).fill(testdata.Fname);
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill(testdata.Lname);
await page.getByRole('textbox', { name: 'Type here' }).first().click();
await page.getByRole('textbox', { name: 'Type here' }).first().fill(testdata.email);
await page.getByRole('button', { name: 'Save' }).click();
//await expect(page.locator('#app')).toContainText('Application Stage');

})