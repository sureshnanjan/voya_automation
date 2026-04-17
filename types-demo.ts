const expected_title:string = "Welcome to Internet"
let expected_subtitle:string = "Available Examples" 
let  expected_example_count:number = 44;
let banner_color = "green";
// let var const
expected_subtitle = "Another Value"
//expected_example_count = 100;

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

console.log(Suresh.Age)