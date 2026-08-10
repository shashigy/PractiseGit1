import {test} from "@playwright/test"

test('hover over operation',async({page})=>{

    await page.goto('https://demo.opencart.com/')

    await page.locator("//a[normalize-space()='Desktops']").hover();

    


})