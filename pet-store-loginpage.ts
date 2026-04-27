//import playwright to open and control the browser
import { chromium } from "playwright"

//interface for logo - the JPetStore logo image at top-left of the page
interface Logo { isVisible: boolean, src: string }

//interface for top header - the Fish | Dogs | Reptiles | Cats | Birds links at top center
interface TopHeader { isVisible: boolean, links: string[] }

//interface for each left sidebar category - bold name is header, text below is sub-header
interface SideCategory { header: string, subHeader: string }

//interface for search field - the search box at top-right of the page
interface SearchField { isVisible: boolean }

//interface for sign in link - the Sign In link at top center
interface SignInLink { isVisible: boolean, text: string }

//interface for the big parrot image shown in the center of the home page
interface CenterParrot { isVisible: boolean, src: string }

//left sidebar categories with their header and sub-header as seen on the page
let sideCategories: SideCategory[] = [
    { header: "Fish",     subHeader: "Saltwater, Freshwater" },
    { header: "Dogs",     subHeader: "Various Breeds" },
    { header: "Cats",     subHeader: "Various Breeds, Exotic Varieties" },
    { header: "Reptiles", subHeader: "Lizards, Turtles, Snakes" },
    { header: "Birds",    subHeader: "Exotic Varieties" }
]

//print all expected side categories to verify objects are created properly
console.log("Expected left sidebar categories:")
for (let cat of sideCategories) console.log(cat.header, "->", cat.subHeader)

//async function to open the page and validate all sections
async function validateHomePage(): Promise<void> {
    let browser = await chromium.launch({ headless: false })
    let page = await browser.newPage()

    //open JPetStore home page
    await page.goto("https://petstore.octoperf.com/actions/Catalog.action")
    console.log("\nOpened JPetStore home page")

    //1. validate logo - JPetStore logo image at top-left
    let logoImg = page.locator("a[href='/actions/Catalog.action'] img").first()
    let logo: Logo = { isVisible: await logoImg.isVisible(), src: await logoImg.getAttribute("src") ?? "not found" }
    console.log("\nLogo src:", logo.src, "| visible:", logo.isVisible)
    console.log(logo.isVisible ? "Logo PASSED" : "Logo FAILED")

    //2. validate top header nav - Fish | Dogs | Reptiles | Cats | Birds at top center
    let navLinks = page.locator("#QuickLinks a")
    let navCount = await navLinks.count()
    let navItems: string[] = []
    for (let i = 0; i < navCount; i++) navItems.push(await navLinks.nth(i).innerText())
    let topHeader: TopHeader = { isVisible: navCount > 0, links: navItems }
    console.log("\nTop Header links:", topHeader.links)
    console.log(topHeader.isVisible ? "Top Header PASSED" : "Top Header FAILED")

    //3. validate left sidebar - each bold category name and its sub-header description below it
    console.log("\n--- Left Sidebar Validation ---")
    for (let cat of sideCategories) {
        //look for the category link by its text in the sidebar
        let catLink = page.locator(".SideBarContent").getByText(cat.header, { exact: true }).first()
        let isVisible = await catLink.isVisible()
        console.log(`${cat.header} (${cat.subHeader}) | visible: ${isVisible}`)
        console.log(isVisible ? `${cat.header} PASSED` : `${cat.header} FAILED`)
    }

    //4. validate search field - search box at the top-right of the page
    let searchInput = page.locator("input[name='keyword']")
    let searchField: SearchField = { isVisible: await searchInput.isVisible() }
    console.log("\nSearch Field visible:", searchField.isVisible)
    console.log(searchField.isVisible ? "Search Field PASSED" : "Search Field FAILED")

    //5. validate sign in link - Sign In button at the top of the page
    let signInEl = page.locator("a[href*='signonForm']")
    let signIn: SignInLink = { isVisible: await signInEl.isVisible(), text: await signInEl.innerText() }
    console.log("\nSign In text:", signIn.text, "| visible:", signIn.isVisible)
    console.log(signIn.isVisible ? "Sign In PASSED" : "Sign In FAILED")

    //6. validate big parrot image - the large parrot shown in the center of the home page
    let parrotImg = page.locator("#Content img").first()
    let parrot: CenterParrot = { isVisible: await parrotImg.isVisible(), src: await parrotImg.getAttribute("src") ?? "not found" }
    console.log("\nParrot image src:", parrot.src, "| visible:", parrot.isVisible)
    console.log(parrot.isVisible ? "Center Parrot PASSED" : "Center Parrot FAILED")

    //close browser after all validations
    await browser.close()
    console.log("\nAll validations done!")
}

//call the function to start the validation - same as how we called addPet(newPet) before
validateHomePage().catch((error) => console.error("Test failed:", error.message))
