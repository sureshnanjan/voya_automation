import assert from "node:assert"
import KPHomePageOperation from "../src/operations/KP_home_page_operations/KP_home_page_operations";
import { describe, it } from "node:test";

describe("KP Pet Web App", function () { 
    describe("Home Page", function () {
        /** @type {KPHomePageOperation} */
        let homePageOperation;
        it("Pet Title Check is OK", function () {
            const expectedTitle = "JPetStore ByOctoperf";
            const actualTitle = homePageOperation.getPetwebTitle();
            assert.equal(actualTitle, expectedTitle);
        }); 
        it("Pet Category Check is OK", function () {
            const expectedCategory = "Fish";
            const actualCategory = homePageOperation.getPetcategory();
            assert.equal(actualCategory, expectedCategory);
        }); 
        it("Pet Category Check is OK", function () {
            const categoryName = "Birds";
            homePageOperation.goTosearch(categoryName);
            const actualTitle = homePageOperation.getPetwebTitle();
            assert.equal(actualTitle, categoryName);
        });
        it("Pet Category Check is OK", function () {
            const categoryName = "Dogs";
            homePageOperation.goTosearch(categoryName);
            const actualTitle = homePageOperation.getPetwebTitle();
            assert.equal(actualTitle, categoryName);
        });
        it("Pet Category Check is OK", function () {
            const categoryName = "Reptiles";
            homePageOperation.goTosearch(categoryName);
            const actualTitle = homePageOperation.getPetwebTitle();
            assert.equal(actualTitle, categoryName);
        }); 
        it("Pet Category Check is OK", function () {
            const categoryName = "Cats";
            homePageOperation.goTosearch(categoryName);
            const actualTitle = homePageOperation.getPetwebTitle();
            assert.equal(actualTitle, categoryName);
        });
    });
});
describe("Sign In Page", function () {
    /** @type {KPHomePageOperation} */
    it("Sign In Title Check is OK", function () {
        const expectedTitle = "Please enter your username and password.";
        homePageOperation.goToSignIn();
        const actualTitle = homePageOperation.getSignInTitle();
        assert.equal(actualTitle, expectedTitle);
    });
    it("Sign In Check is OK", function () {        
        const username = "testuser";
        const password = "testpassword";
        homePageOperation.signIn(username, password);
        const actualTitle = homePageOperation.getSignInTitle();
        assert.equal(actualTitle, "Welcome testuser");
    });
});
describe("Register Page", function () {
    /** @type {KPHomePageOperation} */
    it("Register Title Check is OK", function () {  
        const expectedTitle = "User Information";
        homePageOperation.goToRegister();
        const actualTitle = homePageOperation.getRegisterTitle();
        assert.equal(actualTitle, expectedTitle);
    });
    it("Register Check is OK", function () {
        const username = "newuser";
        const password = "newpassword";
        const firstName = "New";
        const lastName = "User";
        const email = "newuser@example.com";    
        homePageOperation.register(username, password, firstName, lastName, email);
        const actualTitle = homePageOperation.getSignInTitle();
        assert.equal(actualTitle, "Welcome newuser");
    });
    it("Register Check is OK", function () {
        const username = "newuser";
        const password = "newpassword"; 
        homePageOperation.signIn(username, password);
        const actualTitle = homePageOperation.getSignInTitle();
        assert.equal(actualTitle, "Welcome newuser");
    });
});
describe("Search Functionality", function () {
    /** @type {KPHomePageOperation} */
    it("Search Check is OK", function () {
        const searchTerm = "Fish";
        homePageOperation.search(searchTerm);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, searchTerm);
    });
    it("Search Check is OK", function () {
        const searchTerm = "Dogs";
        homePageOperation.search(searchTerm);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, searchTerm);
    });
    it("Search Check is OK", function () {
        const searchTerm = "Reptiles";
        homePageOperation.search(searchTerm);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, searchTerm);
    }); 
    it("Search Check is OK", function () {
        const searchTerm = "Cats";
        homePageOperation.search(searchTerm);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, searchTerm);
    });
    it("Search Check is OK", function () {
        const searchTerm = "Birds";
        homePageOperation.search(searchTerm);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, searchTerm);
    });
});
describe("cart Functionality", function () {
        /** @type {KPHomePageOperation} */
    it("Add to Cart Check is OK", function () {
            const searchTerm = "Fish";
            homePageOperation.search(searchTerm);
            homePageOperation.addToCart();
            const actualTitle = homePageOperation.getCartTitle();
            assert.equal(actualTitle, "Shopping Cart");
        }
    );
    it("Checkout Check is OK", function () {
        homePageOperation.checkout();
        const actualTitle = homePageOperation.getCheckoutTitle();
        assert.equal(actualTitle, "Checkout");
    });
    it("Confirm Check is OK", function () {
        homePageOperation.confirm();
        const actualTitle = homePageOperation.getConfirmationTitle();
        assert.equal(actualTitle, "Order Confirmation");
    });
});
describe("category Functionality", function () {
    /** @type {KPHomePageOperation} */
    it("Fish Category Check is OK", function () {   
        const categoryName = "Fish";
        homePageOperation.goTosearch(categoryName);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, categoryName);
    });
    it("Birds Category Check is OK", function () {
        const categoryName = "Birds";
        homePageOperation.goTosearch(categoryName);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, categoryName);
    });
    it("Dogs Category Check is OK", function () {
        const categoryName = "Dogs";
        homePageOperation.goTosearch(categoryName);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, categoryName);
    });
    it("Reptiles Category Check is OK", function () {
        const categoryName = "Reptiles";
        homePageOperation.goTosearch(categoryName);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, categoryName);
    });
    it("Cats Category Check is OK", function () {
        const categoryName = "Cats";
        homePageOperation.goTosearch(categoryName);
        const actualTitle = homePageOperation.getPetwebTitle();
        assert.equal(actualTitle, categoryName);
    });
});
describe("pet Functionality for Fish", function () {
    /** @type {KPHomePageOperation} */
    it("Pet Details Check is OK", function () {
        const petName = "Angelfish";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Koi";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Goldfish";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Tetra";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
});
describe("pet Functionality for Birds", function () {
    /** @type {KPHomePageOperation} */
    it("Pet Details Check is OK", function () {
        const petName = "Amazon Parrot";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Finch";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Parakeet";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Canary";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
});
describe("pet Functionality for Dogs", function () {
    /** @type {KPHomePageOperation} */  
    it("Pet Details Check is OK", function () {
        const petName = "Bulldog";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Dalmatian";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Golden Retriever";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
});
describe("pet Functionality for Reptiles", function () {
    /** @type {KPHomePageOperation} */
    it("Pet Details Check is OK", function () {
        const petName = "Iguana";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });     
    it("pet Details Check is OK", function () {
        const petName = "Rattlesnake";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
});
describe("pet Functionality for Cats", function () {
    /** @type {KPHomePageOperation} */
    it("Pet Details Check is OK", function () {
        const petName = "Persian";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
    it("pet Details Check is OK", function () {
        const petName = "Siamese";
        homePageOperation.goToPetDetails(petName);
        const actualTitle = homePageOperation.getPetDetailsTitle();
        assert.equal(actualTitle, petName);
    });
    it("Add to Cart from Pet Details Check is OK", function () {
        homePageOperation.addToCartFromPetDetails();
        const actualTitle = homePageOperation.getCartTitle();
        assert.equal(actualTitle, "Shopping Cart");
    });
});
describe("Pet types Functionality", function () {
    /** @type {KPHomePageOperation} */
    it("Pet Types Check is OK", function () {
        const expectedPetTypes = ["Fish", "Dogs", "Reptiles", "Cats", "Birds"];
        const actualPetTypes = homePageOperation.getPetTypes();
        assert.deepEqual(actualPetTypes, expectedPetTypes);
    });
});
