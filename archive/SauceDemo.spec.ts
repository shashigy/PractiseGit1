import{test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";


test('login saucedemo', async({page})=>{

const LoginObj = new LoginPage(page)
await LoginObj.opensite();
await LoginObj.login('standard_user','secret_sauce');
const HomePageObj= new HomePage(page);
await expect(HomePageObj.HomeTitle).toHaveText('Swag Labs');
await HomePageObj.AddingBackpack();
await expect(HomePageObj.backpackRemoveButton).toHaveText('Remove');
await expect(HomePageObj.CartIcon).toHaveText('1')

})