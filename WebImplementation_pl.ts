import { HomePageOperation } from "./PetStoreHomeOperations";
// Using Playwright
class HomePageClass implements HomePageOperation {
    getLogoDetails(){
        return "Logo Details"
    }
    doSearch(input: string): string[] {
        throw new Error("Method not implemented.");
    }
    getAvailableCategories(){
        return ["Fish", "Dog", "Cat"]
    }
    doLogin(username: string, password: string): boolean {
        throw new Error("Method not implemented.");
    }
    getCenterImageDetails(){
        return ["Image1", "Image2", "Image3"]
    }
}