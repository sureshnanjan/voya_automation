// Type definitions for the pet store
// ApiResponse type represents the structure of an API response
// Category type represents a pet category (e.g., Birds, Fish)
// Tag type represents a tag for a pet (e.g., breed or feature)
// Pet type represents a pet in the store
// Order type represents an order placed for a pet
// User type represents a user/customer

type ApiResponse = { code: number, type: string, message: string };
type Category = { id: number, name: string };
type Tag = { id: number, name: string };
type Pet = { id: number, category: Category, name: string, photourls: string[], tags: Tag[], status: 'available' | 'pending' | 'sold' };
type Order = { id: number, petId: number, quantity: number, shipDate: string, status: 'placed' | 'approved' | 'delivered', complete: boolean };
type User = { id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number };

// Fish
// ApiResponse for Fish
let FishResponse: ApiResponse = { code: 201, type: "info", message: "Fish details loaded" };
// Category for Fish
const FishCategory: Category = { id: 1, name: "Fish" };
// Tag for Fish
let FishTag: Tag = { id: 101, name: "Clownfish" };
// Pet object for Fish
let Fish: Pet = { id: 11, category: FishCategory, name: "Nemo", photourls: ["https://example.com/clownfish.jpg"], tags: [FishTag], status: "available" };
// Order for Fish
let FishOrder: Order = { id: 501, petId: 11, quantity: 2, shipDate: "2026-05-01T10:00:00Z", status: "placed", complete: false };
// User for Fish
let FishUser: User = { id: 601, username: "fish_fan", firstName: "Ava", lastName: "Waters", email: "ava.waters@example.com", password: "Fishy123", phone: "555-1111", userStatus: 0 };

// Dog
let DogResponse: ApiResponse = { code: 202, type: "success", message: "Dog details loaded" };
const DogCategory: Category = { id: 2, name: "Dogs" };
let DogTag: Tag = { id: 201, name: "Beagle" };
let Dog: Pet = { id: 22, category: DogCategory, name: "Buddy", photourls: ["https://example.com/beagle.jpg"], tags: [DogTag], status: "pending" };
let DogOrder: Order = { id: 502, petId: 22, quantity: 1, shipDate: "2026-05-02T11:00:00Z", status: "approved", complete: false };
let DogUser: User = { id: 602, username: "dog_lover", firstName: "Ben", lastName: "Barker", email: "ben.barker@example.com", password: "Doggy456", phone: "555-2222", userStatus: 1 };

// Reptiles
let ReptilesResponse: ApiResponse = { code: 203, type: "warning", message: "Reptile is currently sold out" };
const ReptilesCategory: Category = { id: 3, name: "Reptiles" };
let ReptilesTag: Tag = { id: 301, name: "Iguana" };
let Reptiles: Pet = { id: 33, category: ReptilesCategory, name: "Spike", photourls: ["https://example.com/iguana.jpg"], tags: [ReptilesTag], status: "sold" };
let ReptilesOrder: Order = { id: 503, petId: 33, quantity: 1, shipDate: "2026-05-03T12:00:00Z", status: "delivered", complete: true };
let ReptilesUser: User = { id: 603, username: "reptile_keeper", firstName: "Chris", lastName: "Scales", email: "chris.scales@example.com", password: "Reptile789", phone: "555-3333", userStatus: 2 };

// Cat
let CatResponse: ApiResponse = { code: 204, type: "success", message: "Cat details updated" };
const CatCategory: Category = { id: 4, name: "Cats" };
let CatTag: Tag = { id: 401, name: "Siamese" };
let Cat: Pet = { id: 44, category: CatCategory, name: "Luna", photourls: ["https://example.com/siamese.jpg"], tags: [CatTag], status: "available" };
let CatOrder: Order = { id: 504, petId: 44, quantity: 3, shipDate: "2026-05-04T13:00:00Z", status: "placed", complete: false };
let CatUser: User = { id: 604, username: "cat_person", firstName: "Dana", lastName: "Whiskers", email: "dana.whiskers@example.com", password: "Cat321", phone: "555-4444", userStatus: 1 };

// Birds
let BirdsResponse: ApiResponse = { code: 205, type: "info", message: "Birds available for adoption" };
const BirdsCategory: Category = { id: 5, name: "Birds" };
let BirdsTag: Tag = { id: 501, name: "Canary" };
let Birds: Pet = { id: 55, category: BirdsCategory, name: "Sunny", photourls: ["https://example.com/canary.jpg"], tags: [BirdsTag], status: "available" };
let BirdsOrder: Order = { id: 505, petId: 55, quantity: 5, shipDate: "2026-05-05T14:00:00Z", status: "placed", complete: false };
let BirdsUser: User = { id: 605, username: "bird_keeper", firstName: "Sam", lastName: "Feathers", email: "sam.feathers@example.com", password: "Bird654", phone: "555-5555", userStatus: 0 };

// Console output for demonstration
console.log(Fish.id, Fish.name); // Output Fish's id and name
console.log(Dog.category.name, Dog.status); // Output Dog's category and status
console.log(Reptiles.photourls[0], Reptiles.tags[0].name); // Output Reptiles' photo URL and tag name
console.log(Cat); // Output entire Cat object
console.log(Birds.name, Birds.id, Birds.status, Birds.tags[0]); // Output Birds details
