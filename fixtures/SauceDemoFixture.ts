import{test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";


type fixture = {

loginpage: LoginPage;
homepage: HomePage;
}

export const test = baseTest.extend<fixture>({

loginpage: async({page},use)=>{

    const loginpage = new LoginPage(page)
    await use(loginpage);

},

homepage: async({page},use)=>{

    const homepage = new HomePage(page)
    await use(homepage);

}
})