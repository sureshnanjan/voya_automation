
type apiResponse = {code:number,type:string,message:string}
type category = {id:number,name:string}
type pet = {id:number,name:string,category:category,photoUrls:string[],tags:tag[],status:string}
type tag = {id:number,name:string}
type order = {id:number,petId:number,quantity:number,shipDate:string,status:string,complete:boolean}
type user = {id:number,username:string,firstName:string,lastName:string,email:string,password:string,phone:string,userStatus:number}
//fish
let FishapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category:category={id:0,name:"fish"}
let tag:tag={id:0,name:"cute"}
let pet:pet={id:0,name:"fish",category:category,photoUrls:["https://example.com/fish.jpg"],tags:[tag],status:"available"}
let order:order={id:0,petId:0,quantity:1,shipDate:"2026-04-18T00:00:00.000Z",status:"confirmed",complete:false}
let user:user={id:0,username:"Pkumar",firstName:"kiran",lastName:"kumar",email:"kiran@example.com",password:"123334",phone:"5211555222",userStatus:0}
//Dog
let DogapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category2:category={id:1,name:"dog"}
let tag2:tag={id:1,name:"friendly"}
let pet2:pet={id:1,name:"dog",category:category2,photoUrls:["https://example.com/dog.jpg"],tags:[tag2],status:"available"}
let order2:order={id:1,petId:1,quantity:2,shipDate:"2026-04-19T00:00:00.000Z",status:"confirmed",complete:false}
let user2:user={id:1,username:"Agarwal",firstName:"Amit",lastName:"Agarwal",email:"amit@example.com",password:"123334",phone:"5211555222",userStatus:0}
//cat
let catapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category3:category={id:2,name:"cat"}
let tag3:tag={id:2,name:"playful"}
let pet3:pet={id:2,name:"cat",category:category3,photoUrls:["https://example.com/cat.jpg"],tags:[tag3],status:"available"}
let order3:order={id:2,petId:2,quantity:1,shipDate:"2026-04-20T00:00:00.000Z",status:"confirmed",complete:false}
let user3:user={id:2,username:"Sharma",firstName:"Rohit",lastName:"Sharma",email:"rohit@example.com",password:"123334",phone:"5211555222",userStatus:0}
//bird
let birdapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category4:category={id:3,name:"bird"}
let tag4:tag={id:3,name:"colorful"}
let pet4:pet={id:3,name:"bird",category:category4,photoUrls:["https://example.com/bird.jpg"],tags:[tag4],status:"available"}
let order4:order={id:3,petId:3,quantity:1,shipDate:"2026-04-21T00:00:00.000Z",status:"confirmed",complete:false}
let user4:user={id:3,username:"Verma",firstName:"Anil",lastName:"Verma",email:"anil@example.com",password:"123334",phone:"5211555222",userStatus:0} 
//hamster
let hamapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category5:category={id:4,name:"hamster"}
let tag5:tag={id:4,name:"small"}
let pet5:pet={id:4,name:"hamster",category:category5,photoUrls:["https://example.com/hamster.jpg"],tags:[tag5],status:"available"}
let order5:order={id:4,petId:4,quantity:1,shipDate:"2026-04-22T00:00:00.000Z",status:"confirmed",complete:false}
let user5:user={id:4,username:"Kumar",firstName:"Suresh",lastName:"Kumar",email:"suresh@example.com",password:"123334",phone:"5211555222",userStatus:0}
//rabbit
let rabapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category6:category={id:5,name:"rabbit"}
let tag6:tag={id:5,name:"fluffy"}
let pet6:pet={id:5,name:"rabbit",category:category6,photoUrls:["https://example.com/rabbit.jpg"],tags:[tag6],status:"available"}
let order6:order={id:5,petId:5,quantity:1,shipDate:"2026-04-23T00:00:00.000Z",status:"confirmed",complete:false}
let user6:user={id:5,username:"Singh",firstName:"Raj",lastName:"Singh",email:"raj@example.com",password:"123334",phone:"5211555222",userStatus:0}
//turtle
let turtapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category7:category={id:6,name:"turtle"}
let tag7:tag={id:6,name:"slow"}
let pet7:pet={id:6,name:"turtle",category:category7,photoUrls:["https://example.com/turtle.jpg"],tags:[tag7],status:"available"}
let order7:order={id:6,petId:6,quantity:1,shipDate:"2026-04-24T00:00:00.000Z",status:"confirmed",complete:false}
let user7:user={id:6,username:"Gupta",firstName:"Vijay",lastName:"Gupta",email:"vijay@example.com",password:"123334",phone:"5211555222",userStatus:0}
//lizard
let lizapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category8:category={id:7,name:"lizard"}
let tag8:tag={id:7,name:"scaly"}
let pet8:pet={id:7,name:"lizard",category:category8,photoUrls:["https://example.com/lizard.jpg"],tags:[tag8],status:"available"}
let order8:order={id:7,petId:7,quantity:1,shipDate:"2026-04-25T00:00:00.000Z",status:"confirmed",complete:false}
let user8:user={id:7,username:"Shah",firstName:"Rahul",lastName:"Shah",email:"rahul@example.com",password:"123334",phone:"5211555222",userStatus:0}
//snake
let snakapiResponse:apiResponse={code:200,type:"ok",message:"success"}
let category9:category={id:8,name:"snake"}
let tag9:tag={id:8,name:"slithery"}
let pet9:pet={id:8,name:"snake",category:category9,photoUrls:["https://example.com/snake.jpg"],tags:[tag9],status:"available"}
let order9:order={id:8,petId:8,quantity:1,shipDate:"2026-04-26T00:00:00.000Z",status:"confirmed",complete:false}
let user9:user={id:8,username:"Patel",firstName:"Manish",lastName:"Patel",email:"manish@example.com",password:"123334",phone:"5211555222",userStatus:0}

function displayPetInfo(pet: pet): void {
    console.log(`Pet ID: ${pet.id}`);
    console.log(`Name: ${pet.name}`);
    console.log(`Category: ${pet.category.name}`);
    console.log(`Status: ${pet.status}`);
    console.log();
}
function displayOrderInfo(order: order): void {
    console.log(`Order ID: ${order.id}`);
    console.log(`Pet ID: ${order.petId}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Ship Date: ${order.shipDate}`);
    console.log(`Status: ${order.status}`);
    console.log(`Complete: ${order.complete}`);
    console.log();
}
function displayUserInfo(user: user): void {
    console.log(`User ID: ${user.id}`);
    console.log(`Username: ${user.username}`);
    console.log(`First Name: ${user.firstName}`);
    console.log(`Last Name: ${user.lastName}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
    console.log(`User Status: ${user.userStatus}`);
    console.log();
}
function displayApiResponse(apiResponse: apiResponse): void {
    console.log(`Code: ${apiResponse.code}`);
    console.log(`Type: ${apiResponse.type}`);
    console.log(`Message: ${apiResponse.message}`);
    console.log();
}
function main(): void {
    displayApiResponse(FishapiResponse);
    displayPetInfo(pet);
    displayOrderInfo(order);
    displayUserInfo(user);

    displayApiResponse(DogapiResponse);
    displayPetInfo(pet2);
    displayOrderInfo(order2);
    displayUserInfo(user2); 

    displayApiResponse(catapiResponse);
    displayPetInfo(pet3);
    displayOrderInfo(order3);
    displayUserInfo(user3); 

    displayApiResponse(birdapiResponse);
    displayPetInfo(pet4);
    displayOrderInfo(order4);
    displayUserInfo(user4); 

    displayApiResponse(hamapiResponse);
    displayPetInfo(pet5);
    displayOrderInfo(order5);
    displayUserInfo(user5);     

    displayApiResponse(rabapiResponse);
    displayPetInfo(pet6);
    displayOrderInfo(order6);
    displayUserInfo(user6);         

    displayApiResponse(turtapiResponse);
    displayPetInfo(pet7);
    displayOrderInfo(order7);
    displayUserInfo(user7); 

    displayApiResponse(lizapiResponse);
    displayPetInfo(pet8);
    displayOrderInfo(order8);
    displayUserInfo(user8);     

    displayApiResponse(snakapiResponse);
    displayPetInfo(pet9);
    displayOrderInfo(order9);
    displayUserInfo(user9); 
}   
main();

function updatePetStatus(pet: pet, newStatus: string): void {
    pet.status = newStatus;
    console.log(`Updated status of pet ID ${pet.id} to ${pet.status}`);
}
updatePetStatus(pet, "sold");
updatePetStatus(pet2, "pending");
updatePetStatus(pet3, "sold");  
updatePetStatus(pet4, "pending");
updatePetStatus(pet5, "sold");
updatePetStatus(pet6, "pending");
updatePetStatus(pet7, "sold");  
updatePetStatus(pet8, "pending");
updatePetStatus(pet9, "sold");  

function completeOrder(order: order): void {
    order.complete = true;
    console.log(`Order ID ${order.id} is now complete.`);
}
completeOrder(order);
completeOrder(order2);
completeOrder(order3);  
completeOrder(order4);
completeOrder(order5);
completeOrder(order6);  
completeOrder(order7);
completeOrder(order8);
completeOrder(order9);

function updateUserStatus(user: user, newStatus: number): void {
    user.userStatus = newStatus;
    console.log(`Updated status of user ID ${user.id} to ${user.userStatus}`);
}
updateUserStatus(user, 1);
updateUserStatus(user2, 2);
updateUserStatus(user3, 3);
updateUserStatus(user4, 4);
updateUserStatus(user5, 5);
updateUserStatus(user6, 6);
updateUserStatus(user7, 7);
updateUserStatus(user8, 8);
updateUserStatus(user9, 9);

function displayPetsByStatus(pets: pet[], status: string): void {
    console.log(`Pets with status "${status}":`);   
    pets.forEach(pet => {
        if (pet.status === status) {
            console.log(`- ${pet.name} (ID: ${pet.id})`);
        }
    });
}
const allPets: pet[] = [pet, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9];
displayPetsByStatus(allPets, "sold");
displayPetsByStatus(allPets, "pending");
displayPetsByStatus(allPets, "available");  
const allOrders: order[] = [order, order2, order3, order4, order5, order6, order7, order8, order9];
function displayOrdersByStatus(orders: order[], status: string): void {
    console.log(`Orders with status "${status}":`);
    orders.forEach(order => {
        if (order.status === status) {
            console.log(`- Order ID: ${order.id}`);
        }
    });
}
displayOrdersByStatus(allOrders, "placed");
displayOrdersByStatus(allOrders, "approved");
displayOrdersByStatus(allOrders, "delivered");
const allUsers: user[] = [user, user2, user3, user4, user5, user6, user7, user8, user9];
function displayUsersByStatus(users: user[], status: number): void {
    console.log(`Users with status "${status}":`);
    users.forEach(user => {
        if (user.userStatus === status) {
            console.log(`- User ID: ${user.id}`);
        }
    });
}
displayUsersByStatus(allUsers, 1);
displayUsersByStatus(allUsers, 2);
displayUsersByStatus(allUsers, 3);
displayUsersByStatus(allUsers, 4);
displayUsersByStatus(allUsers, 5);
displayUsersByStatus(allUsers, 6);
displayUsersByStatus(allUsers, 7);
displayUsersByStatus(allUsers, 8);
displayUsersByStatus(allUsers, 9);  
const allApiResponses: apiResponse[] = [FishapiResponse, DogapiResponse, catapiResponse, birdapiResponse, hamapiResponse, rabapiResponse, turtapiResponse, lizapiResponse, snakapiResponse];
function displayApiResponsesByCode(apiResponses: apiResponse[], code: number): void {
    console.log(`API responses with code "${code}":`);  
    apiResponses.forEach(apiResponse => {
        if (apiResponse.code === code) {
            console.log(`- Type: ${apiResponse.type}, Message: ${apiResponse.message}`);
        }
    });
}   
displayApiResponsesByCode(allApiResponses, 200);
displayApiResponsesByCode(allApiResponses, 400);
displayApiResponsesByCode(allApiResponses, 500);    

const petsByCategory: { [key: string]: pet[] } = {};
allPets.forEach(pet => {
    const categoryName = pet.category.name; 
    if (!petsByCategory[categoryName]) {
        petsByCategory[categoryName] = [];
    }   
    petsByCategory[categoryName].push(pet);
});
function displayPetsByCategory(petsByCategory: { [key: string]: pet[] }): void {
    for (const category in petsByCategory) {
        console.log(`Category: ${category}`);
        petsByCategory[category].forEach(pet => {
            console.log(`- ${pet.name} (ID: ${pet.id})`);
        });
    }
}
displayPetsByCategory(petsByCategory);

const ordersByUser: { [key: number]: order[] } = {};
allOrders.forEach(order => {
    const userId = order.petId; 
    if (!ordersByUser[userId]) {
        ordersByUser[userId] = [];
    }
    ordersByUser[userId].push(order);
});
function displayOrdersByUser(ordersByUser: { [key: number]: order[] }): void {
    for (const userId in ordersByUser) {
        console.log(`User ID: ${userId}`);
        ordersByUser[userId].forEach(order => {
            console.log(`- Order ID: ${order.id}, Pet ID: ${order.petId}`);
        });
    }   
}
displayOrdersByUser(ordersByUser);

const ordersByPet: { [key: number]: order[] } = {};
allOrders.forEach(order => {
    const petId = order.petId;
    if (!ordersByPet[petId]) {
        ordersByPet[petId] = [];
    }
    ordersByPet[petId].push(order);
});
function displayOrdersByPet(ordersByPet: { [key: number]: order[] }): void {
    for (const petId in ordersByPet) {
        console.log(`Pet ID: ${petId}`);
        ordersByPet[petId].forEach(order => {
            console.log(`- Order ID: ${order.id}, User ID: ${order.petId}`);
        });
    }
}
displayOrdersByPet(ordersByPet);

const usersByStatus: { [key: number]: user[] } = {};
allUsers.forEach(user => {
    const status = user.userStatus; 
    if (!usersByStatus[status]) {
        usersByStatus[status] = [];
    }
    usersByStatus[status].push(user);
});
function displayUsersByStatusByCategory(usersByStatus: { [key: number]: user[] }): void {
    for (const status in usersByStatus) {
        console.log(`User Status: ${status}`);
        usersByStatus[status].forEach(user => {
            console.log(`- User ID: ${user.id}, Username: ${user.username}`);
        });
    }
}
displayUsersByStatusByCategory(usersByStatus);

const apiResponsesByType: { [key: string]: apiResponse[] } = {};
allApiResponses.forEach(apiResponse => {
    const type = apiResponse.type;  
    if (!apiResponsesByType[type]) {
        apiResponsesByType[type] = [];
    }
    apiResponsesByType[type].push(apiResponse);
});
function displayApiResponsesByType(apiResponsesByType: { [key: string]: apiResponse[] }): void {
    for (const type in apiResponsesByType) {
        console.log(`API Response Type: ${type}`);
        apiResponsesByType[type].forEach(apiResponse => {
            console.log(`- Code: ${apiResponse.code}, Message: ${apiResponse.message}`);
        });
    }
}
displayApiResponsesByType(apiResponsesByType);

const petsByTag: { [key: string]: pet[] } = {};
allPets.forEach(pet => {
    pet.tags.forEach(tag => {
        const tagName = tag.name;
        if (!petsByTag[tagName]) {
            petsByTag[tagName] = [];
        }     petsByTag[tagName].push(pet);
    });
});
function displayPetsByTag(petsByTag: { [key: string]: pet[] }): void {
    for (const tag in petsByTag) {
        console.log(`Tag: ${tag}`);
        petsByTag[tag].forEach(pet => {
            console.log(`- ${pet.name} (ID: ${pet.id})`);
        });
    }
}
displayPetsByTag(petsByTag);



    