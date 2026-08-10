import { test } from "@playwright/test"
import fs from "fs"
import { parse } from "csv-parse/sync"



const records = parse(fs.readFileSync("testdata/dataid.csv"), {

    columns: true,
    skip_empty_lines: true


})

records.forEach((datarecord) => {
    test('Testig data from csv1' + datarecord.Id, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/'),
            await page.getByPlaceholder('Username').fill(datarecord.FirstName),
            await page.getByPlaceholder('Password').fill(datarecord.FirstName)
        await page.locator('#login-button').click();
    })


})
