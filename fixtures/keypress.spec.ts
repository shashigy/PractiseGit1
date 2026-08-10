import {test} from "@playwright/test"

test('keyboard test', async({page})=>{

    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/')
    const commentlocater= page.locator('[name="comments"]')
    await commentlocater.press('Control+A+X')
    const usernamelocater= page.locator('[name="username"]')
    await usernamelocater.press('Control+V')
    await usernamelocater.press('Control+A')
    await usernamelocater.press('Backspace')
    await usernamelocater.press('A+b+C')
    await usernamelocater.press('Backspace')
    await page.keyboard.press('PageDown')
    await page.keyboard.press('PageUp')


})