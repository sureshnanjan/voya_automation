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
let FishTag:Tag={id:101, name:"Tiger Shark"};
let Fish: Pet ={id:1, category:{id: 1, name: "Fish"}, name:"Toothless Tiger Shark",
    photourls:["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-02"],
    tags:[{id:101, name:"Tiger Shark"}], status:"available"};
let FishOrder: Order = {id: 500, petId: 10, quantity: 1, shipDate: "2025-04-01T12:00:00Z",
    status: 'placed', complete: false};
let FishUser: User={id:180703, username:"Pet_Store_1", firstName:"Sam", lastName:"Wilson", 
    email:"Sam.Wilson@test.com", password:"Pass321", phone:"123-456-9876", userStatus:1};


//Dog
let DogResponse: ApiResponse = {code: 200, type: "success",message: "Chihuahua item retrieved successfully"};
const DogCategory: Category = {id: 2, name: "Dogs"};
let DogTag: Tag = {id: 201, name: "Chihuahua"};
let Dog: Pet = {id: 20,category: {id: 2,name: "Dogs"},name: "Adult Male Chihuahua",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=K9-CW-01"],
  tags: [{ id: 201, name: "Chihuahua" },],status: "available"};
let DogOrder: Order = {id: 600, petId: 20, quantity: 1, shipDate: "2025-04-01T12:00:00Z", 
    status: "placed", complete: false};
let DogUser: User={id:180703, username:"Pet_Store_1", firstName:"Sam", lastName:"Wilson", 
    email:"Sam.Wilson@test.com", password:"Pass321", phone:"123-456-9876", userStatus:1};

//Reptiles
let ReptilesResponse: ApiResponse = {code: 200, type: "success", message: "Rattlesnake item retrieved successfully"};
const ReptilesCategory: Category = {id: 3, name: "Reptiles"};
let ReptilesTag: Tag = {id: 301, name: "Rattlesnake"};
let Reptiles: Pet = {id: 30, category: {id:3, name: "Reptiles"}, name: "Venomless Rattlesnake",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=RP-SN-01"],
  tags: [ { id: 301, name: "Rattlesnake" }], status: "available"};
let ReptilesOrder: Order = {id: 700, petId: 30, quantity: 1, shipDate: "2025-04-01T12:00:00Z",
  status: "placed", complete: false};
let ReptilesUser: User={id:180703, username:"Pet_Store_1", firstName:"Sam", lastName:"Wilson", 
    email:"Sam.Wilson@test.com", password:"Pass321", phone:"123-456-9876", userStatus:1};

//Cats
let CatManxResponse: ApiResponse = {code: 200, type: "success", message: "Persian item retrieved successfully"};
const CatCategory: Category = {id: 4, name: "Cats"};
let CatTag: Tag = {id: 401, name: "Persian"};
let Cat: Pet = {id: 40, category: {id: 4, name: "Cats"}, name: "Adult Female Persian",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FL-DLH-02"],
  tags: [{ id: 401, name: "Persian" }], status: "available" };
let CatOrder: Order = {id: 800, petId: 40, quantity: 1, shipDate: "2025-04-01T12:00:00Z", 
    status: "placed", complete: false};
let CatUser: User={id:180703, username:"Pet_Store_1", firstName:"Sam", lastName:"Wilson", 
    email:"Sam.Wilson@test.com", password:"Pass321", phone:"123-456-9876", userStatus:1};

    
//Birds
let BirdsResponse: ApiResponse = {code: 200, type: "success", message: "Finch item retrieved successfully"};
const BirdsCategory: Category = {id: 5, name: "Birds"};
let BirdsTag: Tag = {id: 501, name: "Finch"}
let Birds: Pet = {id: 50, category: {id: 5, name: "Birds"}, name:"Adult Male Finch",
  photourls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=AV-SB-02"],
  tags: [{id: 501, name: "Finch"}], status: "available"};
let BirdsOrder: Order = { id: 900, petId: 50, quantity: 1, shipDate: "2025-04-01T12:00:00Z", 
    status: "placed", complete: false };
let BirdsUser: User={id:180703, username:"Pet_Store_1", firstName:"Sam", lastName:"Wilson", 
    email:"Sam.Wilson@test.com", password:"Pass321", phone:"123-456-9876", userStatus:1};


console.log(Fish.id, Fish.name);
console.log(Dog.category.name, Dog.status);
console.log(Reptiles.photourls[0], Reptiles.tags[0].name);
console.log(Cat);
console.log(Birds.name, Birds.id, Birds.status, Birds.tags[0]);
