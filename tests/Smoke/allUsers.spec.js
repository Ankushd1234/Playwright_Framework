import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage.js';
import multiuser from '../../testdata/allUsers.json'

for(const user of multiuser)
{

    test(`Login Application ${user.id}`, async ({ page }) => {
    // your code here
     
    await page.goto('/login');
    const loginPage = new LoginPage(page)

    console.log(`Test data we are using from ${user.username} and ${user.password}`);
    
    //await loginPage.LoginApplication('admin@email.com','admin@123')
    await loginPage.LoginApplication(user.username,user.password)
    //await expect(loginPage.getError()).toBe(user.message);
     expect(await loginPage.getError()).toBe(user.message);
     

     // Created new object for dashboard page 
     

})

}




