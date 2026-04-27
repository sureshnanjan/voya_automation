import { test, expect } from '@playwright/test';
import { SigninOperations } from '../operations/Signinoperations';

test('Signin Page check for correct text on Signin page', async ({ page }) => {
    // Launch Signin Page
    const signinPage: SigninOperations;
    //AAA - Arrange Act Assert
    const expectedSigninText = "Please enter your username and password.";
    // Fetch the Signin text
    const actualSigninText = await signinPage.getSigninText();
    // Assert the Signin text
    expect(actualSigninText).toBe(expectedSigninText);
});

test('Signin Page check for successful login with valid credentials', async ({ page }) => {
     // Launch Signin Page
    const signinPage: SigninOperations;
    //AAA - Arrange Act Assert
    const expectedSuccessMessage = "You have logged in successfully!";
    // Perform Login with valid credentials
    await signinPage.doLogin("validUser", "validPassword");
    // Fetch the success message
    const actualSuccessMessage = await signinPage.getSuccessMessage();
    // Assert the success message
    expect(actualSuccessMessage).toBe(expectedSuccessMessage);
});

test('Signin Page Check for correct error message on invalid login', async ({ page }) => {  
    //AAA - Arrange Act Assert
    const expectedErrorMessage = "Invalid username or password!";
    // Launch Signin Page
    const signinPage: SigninOperations;
    // Perform Login with invalid credentials
    await signinPage.doLogin("invalidUser", "invalidPassword");
});
