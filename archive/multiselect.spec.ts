import{test} from "@playwright/test"

test('Select mutlidropdown options', async({page})=>{{

    await page.goto('https://demoqa.com/select-menu');
    await page.locator('#cars').selectOption(['Volvo', 'Saab','audi']);
}})