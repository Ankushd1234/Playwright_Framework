import { test } from "@playwright/test";

export class BasePage
{
    constructor(page)
    {
        this.page=page;

    }
    
    async getText(selector)
    {
        return await selector.textContent();
    }

    async type(selector,text) 
    {
        await selector.fill(text);
    }


     async click(selector)
     {
        await selector.click();
     }

     async navigateToApplication(url)
     {
        await this.page.goto(url);
     }

     async uploadFile(selector,filepath)
     {
        await selector.setInputFiles(filepath);
     }

}

