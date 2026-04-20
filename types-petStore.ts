// Pet Store Models

type ApiResponse = { code: number, type: string, message: string }

type Category = { id: number, name: string }

type Tag = { id: number, name: string }

type Pet = { id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: string }

type Order = { id: number, petId: number, quantity: number, shipDate: string, status: string, complete: boolean }

type User = { id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number }

// Fish
let fishResponse: ApiResponse = { code: 200, type: "success", message: "Item retrieved successfully" }
const fishCategory: Category = { id: 1, name: "Fish" }
let fishTag: Tag = { id: 101, name: "Large Angelfish" }
let fish: Pet = {
  id: 1,
  category: { id: 1, name: "Fish" },
  name: "Large Angelfish",
  photoUrls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01"],
  tags: [{ id: 101, name: "Large Angelfish" }],
  status: "available"
}
let fishOrder: Order = { id: 500, petId: 10, quantity: 1, shipDate: "2024-01-15T10:00:00Z", status: "placed", complete: false }
let fishUser: User = { id: 722106, username: "Pet_Store_1", firstName: "Jhone", lastName: "Reed", email: "Jhone.Reed@test.com", password: "securePass123", phone: "555-123-4567", userStatus: 1 }

// Dog
let dogResponse: ApiResponse = { code: 200, type: "success", message: "Dalmation item retrieved successfully" }
const dogCategory: Category = { id: 2, name: "Dogs" }
let dogTag: Tag = { id: 201, name: "Dalmation" }
let dog: Pet = {
  id: 20,
  category: { id: 2, name: "Dogs" },
  name: "Spotless Male Puppy Dalmation",
  photoUrls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=K9-DL-01"],
  tags: [{ id: 201, name: "Dalmation" }],
  status: "available"
}
let dogOrder: Order = { id: 600, petId: 20, quantity: 1, shipDate: "2024-02-01T12:00:00Z", status: "placed", complete: false }
let dogUser: User = { id: 722106, username: "Pet_Store_1", firstName: "Jhone", lastName: "Reed", email: "Jhone.Reed@test.com", password: "securePass123", phone: "555-123-4567", userStatus: 1 }

// Reptiles
let reptilesResponse: ApiResponse = { code: 200, type: "success", message: "Iguana item retrieved successfully" }
const reptilesCategory: Category = { id: 3, name: "Reptiles" }
let reptilesTag: Tag = { id: 301, name: "Iguana" }
let reptiles: Pet = {
  id: 30,
  category: { id: 3, name: "Reptiles" },
  name: "Green Adult Iguana",
  photoUrls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=RP-LI-02"],
  tags: [{ id: 301, name: "Iguana" }],
  status: "available"
}
let reptilesOrder: Order = { id: 700, petId: 30, quantity: 1, shipDate: "2024-03-01T12:00:00Z", status: "placed", complete: false }
let reptilesUser: User = { id: 722106, username: "Pet_Store_1", firstName: "Jhone", lastName: "Reed", email: "Jhone.Reed@test.com", password: "securePass123", phone: "555-123-4567", userStatus: 1 }

// Cats
let catResponse: ApiResponse = { code: 200, type: "success", message: "Manx item retrieved successfully" }
const catCategory: Category = { id: 4, name: "Cats" }
let catTag: Tag = { id: 401, name: "Manx" }
let cat: Pet = {
  id: 40,
  category: { id: 4, name: "Cats" },
  name: "With tail Manx",
  photoUrls: ["https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FL-DSH-01"],
  tags: [{ id: 401, name: "Manx" }],
  status: "available"
}
let catOrder: Order = { id: 800, petId: 40, quantity: 1, shipDate: "2024-04-01T12:00:00Z", status: "placed", complete: false }
let catUser: User = { id: 722106, username: "Pet_Store_1", firstName: "Jhone", lastName: "Reed", email: "Jhone.Reed@test.com", password: "securePass123", phone: "555-123-4567", userStatus: 1 }

// Birds
let birdsResponse: ApiResponse = { code: 200, type: "success", message: "Amazon Parrot item retrieved successfully" }
const birdsCategory: Category = { id: 5, name: "Birds" }
let birdsTag: Tag = { id: 501, name: "Amazon Parrot" }
let birds: Pet = {
  id: 50,
  category: { id: 5, name: "Birds" },
  name: "Adult Male Amazon Parrot",
  photoUrls: ["https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-18"],
  tags: [{ id: 501, name: "Amazon Parrot" }],
  status: "available"
}
let birdsOrder: Order = { id: 900, petId: 50, quantity: 1, shipDate: "2024-05-01T12:00:00Z", status: "placed", complete: false }
let birdsUser: User = { id: 722106, username: "Pet_Store_1", firstName: "Jhone", lastName: "Reed", email: "Jhone.Reed@test.com", password: "securePass123", phone: "555-123-4567", userStatus: 1 }

console.log(fish.id, fish.name)
console.log(dog.category.name, dog.status)
console.log(reptiles.photoUrls[0], reptiles.tags[0].name)
console.log(cat)
console.log(birds.name, birds.id, birds.status, birds.tags[0])