// pet models
type ApiResponse = {code: number; type: string; message: string; };
type Category = {id: number;  name: string; };

let Dog: Category = { id:1, name: "bullDog" };
let Poodle: Category = { id:2, name: "PoodleDog" };
let Dalmation: Category = { id:3, name: "DalmationDog" };
let GoldenRetriever : Category = { id:4, name: "GoldenRetrieverDog" };
let LabradorRetriever: Category = { id:5, name: "LabradorRetrieverDog" };
let Chihuahua: Category = { id:6, name: "ChihuahuaDog" };


type pet ={ id: number; category: Category; name : string; photoUrls: string; tags: string; status: string;}
type Tag={ id : number;name : string;  }

 let pet1 :pet={ id: 1,category: Dog, name: "Puppy", photoUrls:"https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH", tags: "firsttag", status: "available" }  
 let pet2 : pet={id:2, category: Poodle, name: "Mr.doggy", photoUrls:"https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH", tags: "secondtag", status: "not available" }
 



 type  Order ={
    id : number;
    petId : number;
    quantity : number;
    shipDate : string;
    status : string;
    complete : boolean;     
 }   

 type User = {
    id : number;
    username : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    phone : string;
    userStatus : number;
 }  
