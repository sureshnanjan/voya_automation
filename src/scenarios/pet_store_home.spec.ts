import {PSHomePageOperations} from "../operations/petstore-home-operations";
test('Home Page Logo  Check for correct URL', async ({ page }) => {
  //AAA - Arrange Act Assert
  const expectedLogoUrl = "https://the-internet.herokuapp.com/img/logo.png";
  // Launch Perstore
  const psPage:PSHomePageOperations;
  // Fetch The displayed logo
  const actualLogo = psPage.getLogoDetails();
  // Assert 
  actualLogo.imagesrc.should.equal(expectedLogoUrl);

});
test('Home Page Logo  Check for correct Logo Color', async ({ page }) => {
  //AAA - Arrange Act Assert
  const expectedLogoColor = "black";
  // Launch Perstore
  const psPage:PSHomePageOperations;
  // Fetch The displayed logo
  const actualLogo = psPage.getLogoDetails();
  // Assert 
  actualLogo.color.should.equal(expectedLogoColor);

});

test('Home Page Check for Fish Category is Correct', async ({ page }) => {
    //AAA - Arrange Act Assert
    const expectedCategoryItems = ["Dogs", "Cats", "Reptiles", "Birds"];
    //  expectedCategoryItems = [{prod_id: "FI-SW-01", prod_name: "Angelfish"}, {prod_id: "FI-SW-02", prod_name: "Tiger Shark"}]
    const psPage:PSHomePageOperations;
    const actualItems = psPage.visitCategory("Fish");   
    // Assert
    actualItems.should.deep.equal(expectedCategoryItems);


});

test('Sign In - Verify username and password fields are present and login link exist', async ({ page }) => {
    //AAA - Arrange Act Assert
    const expectedUsername = "demoTest";
    const expectedPassword = "Password#1";
    // Launch Petstore
    const psPage: PSHomePageOperations;
    // Act - Click on Sign In link
    const signInPage = psPage.clickSignIn();
    // Assert - Verify username and password fields are present
    signInPage.isUsernameFieldPresent().should.equal(true);
    signInPage.isPasswordFieldPresent().should.equal(true);
    signInPage.isLoginButtonPresent().should.equal(true);
    // Act - Enter credentials and click Login
    signInPage.enterUsername(expectedUsername);
    signInPage.enterPassword(expectedPassword);
    signInPage.clickLogin();
});
