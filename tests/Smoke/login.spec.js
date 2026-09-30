import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage.js';
import { DashboardPage } from '../../Pages/DashboardPage.js';
import user from '../../testdata/login.json'

test('login test', async ({ page }) => {
    // your code here

    await page.goto('/login');
    const loginPage = new LoginPage(page)

    console.log(`Test data we are using from ${user.username} and ${user.password}`);
    
    //await loginPage.LoginApplication('admin@email.com','admin@123')
    await loginPage.LoginApplication(user.username,user.password)

     // Created new object for dashboard page 
     const dashboardPage =new DashboardPage(page)
     await dashboardPage.logout();

    await loginPage.NewRegistration();

})


