"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expected_title = "Welcome to Internet";
let expected_subtitle = "Available Examples";
let expected_example_count = 44;
let banner_color = "green";
// let var const
expected_subtitle = "Another Value";
//expected_example_count = 100;
let myname = "Suresh";
let mydurname = "Kumar";
let HomePageDetails = {
    expected_title: "Welcome to Internet",
    expected_subtitle: "Available Examples",
    expected_example_count: 44
};
let Suresh = { name: "Suresh", Age: 50, job: "Trainer" };
let kumar = { job: "tester", name: "kumar", Age: 50 };
//HomePageDetails.notexisting
console.log(Suresh.Age); // Updatng
let dog = {
    name: "Tommy",
    age: 2,
    category: { id: 1, name: "Dog" },
    getName: function () {
        return this.name;
    }
};
let cat = {
    name: "Kitty",
    age: 3,
    category: { id: 2, name: "Cat" },
    getName: function () {
        return this.name;
    }
};
const largeFish = {
    name: "Nemo",
    age: 1,
    category: { id: 3, name: "Fish" },
    getName: function () {
        return this.name;
    }
};
/**
 * Utility function to get the details of the pet
 * @param pet
 * @returns
 */
function myUtilityFunction(pet) {
    return `The pet ${pet.name} is of category ${pet.category.name}`;
}
const myname1 = "Suresh";
myname1.toLowerCase(); //= "Kumar" // Error because of const
myname1.trimEnd(); // suresh - sures;
myUtilityFunction(dog);
dog.getName();
let myname2 = 1;
myname2 = 100; // Type Ineference Error because of string type
//# sourceMappingURL=types-demo.js.map