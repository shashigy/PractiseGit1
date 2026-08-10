import {test, expect} from "@playwright/test"

test('Clicking radio button', async({page})=>{

await page.goto('https://artoftesting.com/samplesiteforselenium');
const malebutton=  page.locator('#male');
await malebutton.click();
await page.locator('#female').click();
await expect(malebutton).not.toBeChecked();

})


test('Clicking checkbox', async({page})=>{

await page.goto('https://artoftesting.com/samplesiteforselenium');
await page.locator('.Automation').check();
await expect(page.locator('.Automation')).toBeChecked();
await page.locator('.Performance').check();

if(await page.locator('.Automation').isChecked()){

    console.log('Element was checked');
    await page.locator('.Automation').uncheck();
}


})

// Select dropdown option

test('select single dropdown',async({page})=>{

    //await page.goto('https://artoftesting.com/samplesiteforselenium');
    //await page.locator('#testingDropdown').selectOption({label:'Performance Testing'});

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption('Volvo (Latin for "I roll")')

})