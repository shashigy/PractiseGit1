import {test} from "@playwright/test"

test("first test",async ({page})=>{

    await page.goto("https://www.google.com/");
    await page.getByRole('button', { name: 'Google apps' }).click()
    
    console.log("First Test")

})

test("second test",()=>{

    console.log("Second Test")

})