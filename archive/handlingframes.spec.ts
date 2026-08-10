import{test, expect} from "@playwright/test"

test('handling iframes using names', async({page})=>{

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form');

    const w3iframe= page.frame('iframeResult');

    await w3iframe?.locator('#fname').fill('Shashi');

})


test('handling iframes using url', async({page})=>{

await page.goto('https://www.w3schools.com/html/html_iframe.asp');

const w3frame2= page.frame({url:"https://www.w3schools.com/html/default.asp"})
await w3frame2?.getByRole('button', { name: 'Button to open search field' }).click();
await w3frame2?.getByRole('textbox', { name: 'Search field' }).fill('test')


})

test('handling iframes using framelocater', async({page})=>{

await page.goto('https://www.w3schools.com/html/html_iframe.asp');

const w3framelocator= page.frameLocator("[title='W3Schools HTML Tutorial']");

await w3framelocator.getByRole('button', { name: 'Button to open search field' }).click();

await w3framelocator.getByRole('textbox', { name: 'Search field' }).fill('rock')
})