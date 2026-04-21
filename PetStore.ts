// Pet Store Model

type ApiResponse = { code: number, type: string, message: string }
type Category = { id: number, name: string }
type Tag = { id: number, name: string }
type Pet = { id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: string }
type Order = { id: number, petId: number, quantity: number, shipDate: string, status: string, complete: boolean }
type User = { id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number }


// Dog

let DogResponse: ApiResponse = {
  code: 200,
  type: "success",
  message: "Bulldog retrieved successfully"
};

let DogCategory: Category = {
  id: 2,
  name: "Dogs"
};

let DogTag: Tag = {
  id: 203,
  name: "Bulldog"
};

let Dog: Pet = {
  id: 1,
  category: DogCategory,   
  name: "Male Adult Bulldog",
  photoUrls: [ "https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=K9-BD-01"],
  tags: [DogTag],   
  status: "available"
};

let DogOrder: Order = {
  id: 342,
  petId: Dog.id,       
  quantity: 1,
  shipDate: "2026-04-21T12:00:00Z",
  status: "placed",
  complete: false
};

let DogUser: User = {
  id: 736835,
  username: "petStore",
  firstName: "pet",       // small typo fix
  lastName: "store",
  email: "pet.store.com",
  password: "password@123",
  phone: "1234567890",
  userStatus: 5
};