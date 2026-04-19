type ApiResponse = {code:number, type:string, message:string}
type Category={id:number, name:string}
type Tag={id:number, name:string}
type Pet={id:number, category:Category, name:string, photourls:string[], tags:Tag[], 
    status: 'available' | 'pending' | 'sold'}
type Order={id:number, petId:number, quantity:number, shipDate:string, 
    status:'placed' | 'approved' | 'delivered',
    complete:boolean}
type User={id:number, username:string, firstName:string, lastName:string, email:string,
     password:string, phone:string, userStatus:number}


//Fish
let Fishresponse:ApiResponse = {code: 200, type: "success", message: "Item retrieved successfully"};
const FishCategory: Category = {id: 1, name: "Fish"};
let FishTag:Tag={id:101, name:"Large Angelfish"};
let Fish: Pet ={id:1, category:{id: 1, name: "Fish"}, name:"Large Angelfish",
    photourls:["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01"],
    tags:[{id:101, name:"Large Angelfish"}], status:"available"};
let FishOrder: Order = {id: 500, petId: 10, quantity: 1, shipDate: "2024-01-15T10:00:00Z",
    status: 'placed', complete: false};
let FishUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};


//Dog
let DogResponse: ApiResponse = {code: 200, type: "success",message: "Dalmation item retrieved successfully"};
const DogCategory: Category = {id: 2, name: "Dogs"};
let DogTag: Tag = {id: 201, name: "Dalmation"};
let Dog: Pet = {id: 20,category: {id: 2,name: "Dogs"},name: "Spotless Male Puppy Dalmation",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=K9-DL-01"],
  tags: [{ id: 201, name: "Dalmation" },],status: "available"};
let DogOrder: Order = {id: 600, petId: 20, quantity: 1, shipDate: "2024-02-01T12:00:00Z", 
    status: "placed", complete: false};
let DogUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};


//Reptiles
let ReptilesResponse: ApiResponse = {code: 200, type: "success", message: "Iguana item retrieved successfully"};
const ReptilesCategory: Category = {id: 3, name: "Reptiles"};
let ReptilesTag: Tag = {id: 301, name: "Iguana"};
let Reptiles: Pet = {id: 30, category: {id:3, name: "Reptiles"}, name: "Green Adult Iguana",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=RP-LI-02"],
  tags: [ { id: 301, name: "Iguana" }], status: "available"};
let ReptilesOrder: Order = {id: 700, petId: 30, quantity: 1, shipDate: "2024-03-01T12:00:00Z",
  status: "placed", complete: false};
let ReptilesUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
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
let CatUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};

    
//Birds
let BirdsResponse: ApiResponse = {code: 200, type: "success", message: "Amazon Parrot item retrieved successfully"};
const BirdsCategory: Category = {id: 5, name: "Birds"};
let BirdsTag: Tag = {id: 501, name: "Amazon Parrot"}
let Birds: Pet = {id: 50, category: {id: 5, name: "Birds"}, name:"Adult Male Amazon Parrot",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-18"],
  tags: [{id: 501, name: "Amazon Parrot"}], status: "available"};
let BirdsOrder: Order = { id: 900, petId: 50, quantity: 1, shipDate: "2024-05-01T12:00:00Z", 
    status: "placed", complete: false };
let BirdsUser: User={id:722106, username:"Pet_Store_1", firstName:"Jhone", lastName:"Reed", 
    email:"Jhone.Reed@test.com", password:"securePass123", phone:"555-123-4567", userStatus:1};


console.log(Fish.id, Fish.name);
console.log(Dog.category.name, Dog.status);
console.log(Reptiles.photourls[0], Reptiles.tags[0].name);
console.log(Cat);
console.log(Birds.name, Birds.id, Birds.status, Birds.tags[0]);
