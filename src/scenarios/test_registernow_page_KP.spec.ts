import test, { expect } from 'playwright/types/test';
import { RegisternowOperations } from '../operations/Registernow_page_operations';
test('Register Now Page check for correct text on Register Now page', async ({ page }) => {
    // Launch Register Now Page
     const registerNowPage = new RegisternowOperations(page);
     await registerNowPage.navigate();
    //AAA - Arrange Act Assert
    const expectedRegisterNowText = "Please enter your details to create an account.";  
    // Fetch the Register Now text
    const actualRegisterNowText = await registerNowPage.getRegisterNowText();
    // Assert the Register Now text
    expect(actualRegisterNowText).toBe(expectedRegisterNowText);
});

test('Register Now Page check for successful account creation with valid details', async ({ page }) => {
     // Launch Register Now Page
    const registerNowPage = new RegisternowOperations(page);
    await registerNowPage.navigate();
    //AAA - Arrange Act Assert
    const expectedSuccessMessage = "Your account has been created successfully!";
    // Perform account creation with valid details
    await registerNowPage.douserinformation("newUser", "newPassword", "newPassword");
    await registerNowPage.doaccountinformation("John", "Doe", "john.doe@example.com", "1234567890", "123 Main St", "Apt 4B", "New York", "NY", 10001, "USA");
    await registerNowPage.doprofileinformation("English", "Books", true, true);
    await registerNowPage.dosaveaccountinformation();
    // Fetch the success message
    const actualSuccessMessage = await registerNowPage.getSuccessMessage();
    // Assert the success message
    expect(actualSuccessMessage).toBe(expectedSuccessMessage);
});

test('Register Now Page Check for correct error message on account creation with invalid details', async ({ page }) => {  
    //AAA - Arrange Act Assert
    const expectedErrorMessage = "Please fill out all required fields correctly!";
    // Launch Register Now Page
    const registerNowPage = new RegisternowOperations(page);
    await registerNowPage.navigate();
    // Perform account creation with invalid details
    await registerNowPage.douserinformation("newUser", "newPassword", "differentPassword");
    await registerNowPage.doaccountinformation("", "", "invalidemail", "invalidphone", "", "", "", "", 0, "");
    await registerNowPage.doprofileinformation("", "", false, false);
    await registerNowPage.dosaveaccountinformation();
    // Fetch the error message
    const actualErrorMessage = await registerNowPage.getErrorMessage();
    // Assert the error message
    expect(actualErrorMessage).toBe(expectedErrorMessage);
});
