import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly HomeTitle: Locator;
    readonly backpackAddtoCartButton: Locator;
    readonly backpackRemoveButton: Locator;
    readonly CartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.HomeTitle = page.getByText('Swag Labs');
        this.backpackAddtoCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.backpackRemoveButton = page.locator('id=remove-sauce-labs-backpack');
        this.CartIcon = page.locator('[data-test="shopping-cart-link"]');

    }

async AddingBackpack(){

    await this.backpackAddtoCartButton.click();

}



}