
// Pet store  models

type ApiResponse = {code: number; type: string; message: string; };

let response: ApiResponse = { code: 200, type: "success", message: "Pet added successfully" };

type Category = {id: number;  name: string; };

//dog categories
let Dog: Category = { id:1, name: "bullDog" };
let Poodle: Category = { id:2, name: "PoodleDog" };
let Dalmation: Category = { id:3, name: "DalmationDog" };
let GoldenRetriever : Category = { id:4, name: "GoldenRetrieverDog" };
let LabradorRetriever: Category = { id:5, name: "LabradorRetrieverDog" };
let Chihuahua: Category = { id:6, name: "ChihuahuaDog" };

type Pet = { id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: string }

type Tag={ id : number; name : string;  }

//using the Pet and Tag types
 let cat1 :Pet={ 
   id: 1,
   category: { id: 1, name: "Cat" },
   name: "Manx",
   photoUrls:["https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=CATS"],
   tags: [{id: 1, name: "Tailless manx"}], 
   status: "available" 
}  

let cat2: Pet={
   id:2, 
   category: { id: 1, name: "Cat" }, 
   name: "Persian", 
   photoUrls:["https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=CATS"],
   tags: [{id: 2, name: "Adult Female Persian"}], 
   status: "available" 
}

 let fish : Pet= { 
   id:1, 
   category:{ id: 2, name: "Angelfish" },
   name: "Mr.doggy", 
   photoUrls:["https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH"], 
   tags: [{id: 3, name: "Large Angelfish"}], 
   status: "not available" 
}

 type  Order ={  id : number;  petId : number; quantity : number; shipDate : string; status : string;complete : boolean;   }   

 //using the Order type
 let order1: Order = {
      id: 1,
      petId: 1,
      quantity: 1,
      shipDate: "2024-06-01T10:00:00.000Z",
      status: "placed",
      complete: false
 }
 let order2: Order = {
      id: 2,
      petId: 2,      
      quantity: 2,
      shipDate: "2024-06-02T12:00:00.000Z",
      status: "Not Placed",
      complete: false
 }

 type User = { id : number; username : string; firstName : string; lastName : string; email : string;  password : string;  phone : string;  userStatus : number;}  
 
 let user1: User = {
    id: 1,
    username: "Ramesh_Rao",
    firstName: "Ramesh",
    lastName: "Rao",
    email: "ramesh.rao@example.com",
    password: "password123",
    phone: "123-456-7890",
    userStatus: 1
}

console.log(cat1.name);
console.log(cat2.id, cat2.name);
console.log(fish.name, fish.tags);
console.log(order1.id, order1.quantity,order1.status);
console.log(order2.id, order2.quantity,order2.status);
console.log(user1.username, user1.phone);
