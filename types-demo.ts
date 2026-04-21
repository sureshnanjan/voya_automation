const expected_title:string = "Welcome to Internet"
let expected_subtitle:string = "Available Examples" 
let  expected_example_count:number = 44;
let banner_color = "green";
// let var const
expected_subtitle = "Another Value"
//expected_example_count = 100;


let myname = "Suresh"
let mydurname = "Kumar"

let HomePageDetails = {
expected_title:"Welcome to Internet",
expected_subtitle:"Available Examples",
expected_example_count: 44
}
// Employees
type HomePage = {title:string, subtitle:string, count:number}
type Employee = {name:string, Age:number, job:string}

let Suresh:Employee = {name: "Suresh", Age:50,job:"Trainer"}
let kumar:Employee = {job:"tester", name:"kumar", Age:50}

//HomePageDetails.notexisting

console.log(Suresh.Age) // Updatng

/**
 * Category type with id and name
 */
type category= {id:number, name:string}

/**
 * Pet type with name, age, category and a method to get the name
 */
type pet = {
    /**
     * Name of the pet
     */
    name:string,
    /**
     * Age of the pet in years
     */
    age:number,
    /**
     * Category of the pet, which includes an id and a name
     */
    category:category
    /**
     * Helps to find the Name of the Pet
     * @returns The First name of the Pet
     */
    getName:()=>string
}

let dog:pet = {
    name:"Tommy",
    age:2,
    category:{id:1, name:"Dog"},
    getName: function():string{
        return this.name;
    }
}

let cat:pet = {
    name:"Kitty",
    age:3,
    category:{id:2, name:"Cat"},
    getName: function():string{
        return this.name;
    }
}

const largeFish:pet = {
    name:"Nemo",
    age:1,
    category:{id:3, name:"Fish"},
    getName: function():string{
        return this.name;
    }
}

/**
 * Utility function to get the details of the pet
 * @param pet 
 * @returns 
 */
function myUtilityFunction(pet:pet):string
{
    return `The pet ${pet.name} is of category ${pet.category.name}`
}

const myname1:string = "Suresh"
myname1.toLowerCase(); //= "Kumar" // Error because of const

myname1.trimEnd(); // suresh - sures;

myUtilityFunction(dog);

dog.getName()

let myname2 = 1;
myname2 = 100;// Type Ineference Error because of string type
let myobject:{name:string, age?:number} = {name:"Suresh", age:50}
myobject = {name:"Kumar"} // Type Inference Error because of name and age properties
myobject = {name:"Kumar", age:50} // Type Inference Error because of name and age properties
myobject = {age:50} // Type Inference Error because of name and age properties