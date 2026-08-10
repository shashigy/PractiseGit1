import {Page, Locator} from "@playwright/test"

export class LoginPage{

readonly page: Page;
readonly usernameTextbox : Locator;
readonly passwordTextbox : Locator;
readonly LoginButton: Locator



constructor(page: Page){
this.page= page;
this.usernameTextbox = page.locator('id=user-name');
this.passwordTextbox = page.locator('id=password');
this.LoginButton = page.locator("id=login-button");

}


async opensite(){

await this.page.goto('https://www.saucedemo.com/')

}


async login(username:string, password:string){

await this.usernameTextbox.fill(username)
await this.passwordTextbox.fill(password)
await this.LoginButton.click();

}

}