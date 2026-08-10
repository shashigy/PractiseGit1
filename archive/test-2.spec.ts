import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.google.com/?zx=1769606141999&no_sw_cr=1');
await expect(page.getByRole('search')).toContainText('Google Search');
await page.getByRole('combobox', { name: 'Search' }).click();
await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
await page.getByRole('link', { name: 'AI Mode' }).click();await page.getByRole('link', { name: 'AI Mode' }).click();
});