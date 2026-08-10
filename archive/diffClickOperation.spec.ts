import {test} from "@playwright/test"


test('Single click', async({page})=>{

//await page.goto("https://www.google.com/")
// await page.getByRole('button', { name: 'Upload files or images' }).click()

await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
await page.getByText('right click me', { exact: true }).click({button:'right'})

})