import assert from "node:assert";
import HomePageOperation from "../src/operations/home_page_operations";
// Title Check
// Subtitle Check
// Available Examples Check
// Navigating to example works fine
// Right Banner Check
   // - Banner Color
   // - Banner Image
   // - Banner Text
describe("Heroku App", function () {
  describe("Home Page", function () {
    let homePageOperation; //: HomePageOperation;
    it("Title Check is OK", function () {
      /// AAA - Arrange Act Assert
      const expectedTitle = "Welcome to Internet";
      //Act
      const actualTitle = homePageOperation.getTitle();
      assert.equal(actualTitle, expectedTitle);
    });
    it("Sub Title Check is OK", function () {
     const expectedSubTitle = "Available Examples";
      //Act
      const actualSubTitle = homePageOperation.getSubTitle();
      assert.equal(actualSubTitle, expectedSubTitle);
    });
    it("Available Examples COUNT is OK", function () {
      const expectedExampleCount = 44;
      //Act
      const actualExampleCount = homePageOperation.getAvailableExamples().length;
      assert.equal(actualExampleCount, expectedExampleCount);
    });
    it("Right Banner Check is OK", function () {
      const expectedBannerDetails = {
        color: "green",
        displayText: "Fork Me on GitHub",
      };
      //Act
      const actualBannerDetails = homePageOperation.getBannerDetails();
      assert.deepEqual(actualBannerDetails, expectedBannerDetails); 
    });
     it("Navigating to example works fine", function () {
      //assert.equal([1, 2, 3].indexOf(4), -1);
      const exampleName = "A/B Testing";
      //Act
      homePageOperation.goToExample(exampleName);
      const actualTitle = homePageOperation.getTitle();
      assert.equal(actualTitle, exampleName);
    });
  });
});
