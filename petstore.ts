type ApiResponse = {code:number, type:string, message:string}
 
type Tag = { id: number, name: string };
 
type Category = {id:number,name:string}
 
type Pet = {id: number, category:Category[], name:string, photoUrls:string[],  tags:Tag[], status:string}
 
type Order = {id:number, petId:number, quantity:number, shipDate:Date, status:string, complete:boolean}
 
type User = {id:number, username:string, firstName:string, lastName:string, email:string, password:string, phone:string, userStatus:number}

//Fish
let Fishresponse:ApiResponse = {code: 200, type: "success", message: "Item retrieved successfully"};
const FishCategory: Category = {id: 1, name: "Fish"};
let FishTag:Tag={id:101, name:"Large Angelfish"};
let Fish: Pet ={id:1, category:{id:1, name: "Fish"}, name:"Large Angelfish",
    photourls:["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01"],
    tags:[{id:101, name:"Large Angelfish"}], status:"available"};
let FishOrder: Order = {id: 500, petId: 10, quantity: 1, shipDate: "2024-01-15T10:00:00Z",
    status: 'placed', complete: false};
let FishUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};
 
 
 
//Cats
let CatManxResponse: ApiResponse = {code: 200, type: "success", message: "Manx item retrieved successfully"};
const CatCategory: Category = {id: 4, name: "Cats"};
let CatTag: Tag = {id: 401, name: "Manx"};
let Cat: Pet = {id: 40, category: {id: 4, name: "Cats"}, name: "With tail Manx",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FL-DSH-01"],
  tags: [{ id: 401, name: "Manx" }], status: "available" };
let CatOrder: Order = {id: 800, petId: 40, quantity: 1, shipDate: "2024-04-01T12:00:00Z", 
    status: "placed", complete: false};
let CatUser: User={id:722950, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};
 