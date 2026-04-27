// Search For Pet
    // Search Fish Category
    // Search Dog Category
    // Search Cat Category
    // Search for exisying pet
    //Search for not exixtsing

import { HomePageOperation } from "./PetStoreHomeOperations";
let homePageOps:HomePageOperation;
homePageOps.doSearch("fish");
homePageOps.doSearch("dog");

// ============================================================
// SIGN IN SCENARIOS
// ============================================================

// Scenario 1: Click the Sign In link and verify the sign-in page loads
// Expected: returns sign-in page details (e.g. form fields, title)
homePageOps.accessSignIn();
// Scenario 3: After clicking Sign In - verify the page header text
// Expected: "Please enter your username and password."
const actualHeader = homePageOps.getSignInPageHeader();
actualHeader.should.equal("Please enter your username and password.");

// Scenario 4: After clicking Sign In - verify the Register text is visible
// Expected: "Need a user name and password? Register Now!" is displayed
const actualRegisterText = homePageOps.getRegisterTextVisibility();
actualRegisterText.should.equal(true);

// Scenario 5: Login with valid credentials
// Expected: returns true (login successful)
const actualLogin = homePageOps.doLogin("user1", "password1");
actualLogin.should.equal(true);

// Scenario 6: After clicking Sign In - verify the Login button is visible
// Expected: true (Login button is displayed)
const actualLoginBtnVisible = homePageOps.getLoginBtnVisibility();
actualLoginBtnVisible.should.equal(true);

// Scenario 7: Click on the Login button
homePageOps.clickLoginButton();

// ============================================================
// REPTILES CATEGORY SCENARIOS
// ============================================================

// Scenario 8: Click on the Reptiles category link
homePageOps.visitReptilesCategory();

// Scenario 9: Verify the Reptiles category items are correct
// Expected: list of reptile products with Product ID and Name
const expectedReptiles = [
    { prod_id: "RP-SN-01", name: "Rattlesnake" },
    { prod_id: "RP-LI-02", name: "Iguana" }
];
const actualReptiles = homePageOps.getReptilesCategoryItems();
actualReptiles.should.deep.equal(expectedReptiles);






