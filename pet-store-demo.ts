//import axios to make API calls
import axios from "axios"

//define types - same style as petstore-buddy.ts
type Category = {id: number, name: string}
type Tag = {id: number, name: string}
type Pet = {id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: string}

//create pet object
let newPet: Pet = { id: 0, category: {id: 0, name: "Dogs"}, name: "doggie", photoUrls: ["string"], tags: [{id: 0, name: "vaccinated"}], status: "available" }

//print pet details to verify object is created properly
console.log(newPet.name)
console.log(newPet.status)
console.log(newPet.category.name)

//function to send POST request to Petstore API
async function addPet(pet: Pet): Promise<void> {
  let url = "https://petstore.swagger.io/v2/pet"

  try {
    //send POST request with pet object as body and content type as JSON
    let response = await axios.post(url, pet, { headers: { "Content-Type": "application/json" } })

    //print response status and body
    console.log("Status Code:", response.status)
    console.log("Response Body:", JSON.stringify(response.data, null, 2))

  } catch (error: any) {
    //print error if request fails
    if (error.response) {
      console.error("Error Status:", error.response.status)
      console.error("Error Body:", error.response.data)
    } else {
      console.error("Request Error:", error.message)
    }
  }
}

//call addPet function with newPet object
addPet(newPet)
