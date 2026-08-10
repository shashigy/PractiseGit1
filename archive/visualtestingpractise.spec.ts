import {test, expect} from "@playwright/test"


test('Visual testing', async({page})=>{

    await page.goto("http://the-internet.herokuapp.com/tables")
    // await expect(page).toHaveScreenshot(['Folder1/childfolder1','Visualtesting1.png'])
    // await expect(page).toHaveScreenshot(['Folder1','childfolder1','Visualtesting1.png'])
    //await expect(page).toHaveScreenshot('Visualtesting3.png')
    //await expect(page).toHaveScreenshot('Visualtesting3.png', {maxDiffPixels:200})
    //await expect(page).toHaveScreenshot('maxdiffratio.png',{maxDiffPixelRatio:0.60})
    //await expect(page).toHaveScreenshot('maskscreenshot.png', {mask:[page.locator("//table[@id='table1']//tbody//td[4]"),page.locator('#table2')]})
    await expect(page).toHaveScreenshot('maskedscreenshot.png')
    
})

test('iframe visibility', async({page})=>{

    await page.goto('https://demoqa.com/forms')
    await expect(page).toHaveScreenshot('iframeVisibility.png', {stylePath:"snapshot.css"})

})


test.only('Non image Visual testing', async({page})=>{


    await page.goto("https://playwright.dev/")
    expect(await page.locator(".hero__title.heroTitle_ohkl").textContent()).toMatchSnapshot('textcontent.txt')
})