import { Page } from "@playwright/test";
import { BasePage  } from "./BasePage.js";


export class LoginPage  extends BasePage{
    
   
    constructor(page) {

        super(page);
        this.page = page;
        this.userEmail = page.locator("input[placeholder='Enter Email']");
        this.userPassword = page.locator("input[placeholder='Enter Password']");
        this.userSignIn = page.locator("button[type='submit']");
        this.newUserRegistration= page.locator("//a[@class='subLink']")
        this.errorMessage= page.locator(".errorMessage")
      this.menuOptions =page.locator("//img[@alt='menu']");
         this.logoutUser= page.getByText("Sign out");
    }

    async LoginApplication(username, password) {

        //Fetching from Basefile methods
        await this.type(this.userEmail,username);
        await this.type(this.userPassword,password)
        await this.click(this.userSignIn);

        //standard methods
        // await this.userEmail.fill(username);
        // await this.userPassword.fill(password);
        // await this.userSignIn.click();
        
    }

    async logout()
    {
        //base clase methods 
        await this.click(this.menuOptions);
        await this.click(this.logoutUser);
        
        //standard metods
        // await this.menuOptions.click();
        // await this.logoutUser.click();
    }

    async NewRegistration()
    {

        await this.click(this.newUserRegistration)
       // await this.newUserRegistration.click();
    }

    
    async getError() 
    {

    return await this.getText(this.errorMessage);
    // return await this.page.locator('.errorMessage').textContent();
    }
    
}

