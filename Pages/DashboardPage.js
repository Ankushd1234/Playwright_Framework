import { test,expect } from "@playwright/test";
import { BasePage  } from "./BasePage.js";

export class DashboardPage extends BasePage{

    constructor(page)
    {
        super(page);
        this.page=page;
        this.menuOptions =page.locator("//img[@alt='menu']");
        this.logoutUser= page.getByText("Sign out");   

    }

    async logout()
    {
        await this.click(this.menuOptions);
        await this.click(this.logoutUser);

        // await this.menuOptions.click();
        // await this.logoutUser.click();
    }

}