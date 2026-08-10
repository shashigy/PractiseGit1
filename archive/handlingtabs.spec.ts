import{test, expect} from "@playwright/test"

test('handling tabs', async({context})=>{

const page = await context.newPage();
await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');
await expect(page).toHaveTitle('Windows Links | Test Pages')

const contextpage = context.waitForEvent('page')

await page.locator("id=gobasicajax").click();

const newpage = await contextpage

await newpage.getByRole('button', { name: 'Click to reveal current' }).click();






})