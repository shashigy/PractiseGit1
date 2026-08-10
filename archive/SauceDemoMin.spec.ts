import{expect} from "@playwright/test";
import{test} from "../fixtures/SauceDemoFixture";


test('login saucedemo', async({page,loginpage})=>{


await loginpage.opensite();
await loginpage.login('standard_user','secret_sauce');
const HomePageObj= new HomePage(page);
await expect(HomePageObj.HomeTitle).toHaveText('Swag Labs');
await HomePageObj.AddingBackpack();
await expect(HomePageObj.backpackRemoveButton).toHaveText('Remove');
await expect(HomePageObj.CartIcon).toHaveText('1')

})