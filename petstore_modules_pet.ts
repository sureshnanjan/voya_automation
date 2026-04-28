/* *
*petstore_modules_pet.ts
*This module defines the structure of a pet object and provides two example pet objects,
 *pet1 and pet2. The pet object includes properties such as id, name, category, photoUrls, tags, and status. The module exports the pet type and the two example pet objects for use in other parts of the application.
*/  

type pet ={
    id:number;
    name:string;
    category:{id:number;name:string};
    photoUrls:string[];
    tags:{id:number;name:string}[];
    status:string;
}
/* * Example pet objects
*pet1 represents a dog named "Doggie" that belongs to the "Dogs" category, has two photo URLs, and is tagged with "tag1" and "tag2". Its status is "available".
*pet2 represents a cat named "Kitty" that belongs to the "Cats" category, has two photo URLs, and is tagged with "tag3" and "tag4". Its status is "pending".
 * The pet objects are exported for use in other modules of the application, allowing them to be easily imported and utilized wherever pet data is needed.
 */
let pet1:pet={
    id:1,
    name:"Annie",
    category:{id:1,name:"Dogs"},
    photoUrls:["url1","url2"],
    tags:[{id:1,name:"tag1"},{id:2,name:"tag2"}],
    status:"available"
}
/**
 * Example pet object
*pet2 represents a cat named "Kitty" that belongs to the "Cats" category, has two photo URLs, and is tagged with "tag3" and "tag4". Its status is "pending".              
 */
let pet2:pet={
    id:2,
    name:"Kitty",       
    category:{id:2,name:"Cats"},
    photoUrls:["url3","url4"],
    tags:[{id:3,name:"tag3"},{id:4,name:"tag4"}],
    status:"pending"
}
export {pet,pet1,pet2 }