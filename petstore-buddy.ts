
//define pet types
type Pet = {name: string, category:string, productId: string}

//create object 
let buddy: Pet = { productId: "K9-BD-01", name: "Buddy", category: "Dogs" }

let poodle: Pet = { productId: "K9-PO-02", name: "Poodle", category: "Dogs" }
let dalmation: Pet = { productId: "K9-DL-01", name: "Dalmation", category: "Dogs" }
let goldenRetriever: Pet = { productId: "K9-RT-01", name: "Golden Retriever", category: "Dogs" }
let labradorRetriever: Pet = { productId: "K9-RT-02", name: "Labrador Retriever", category: "Dogs" }
let chihuahua: Pet = { productId: "K9-CW-01", name: "Chihuahua", category: "Dogs" }

//create console.log file to verify if objects are created properly or not
console.log(buddy.name)
console.log(buddy.category)
console.log(buddy.productId)
console.log(poodle.name)
console.log(labradorRetriever.productId)