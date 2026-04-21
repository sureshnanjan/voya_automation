// type
type MyType = {
    id: number;
    name: string;
    printDetails: () => void;
}
type bannerInfo = {
    imageUrl?: string;
    color: HerokuColor;
    displaytext: string
}
type HerokuHomePage{
    title: string;
    subtitle: string;
    examples: string[];
    banner: bannerInfo
}
/**
 * This is the DAta Struncture that holds the allowed colors in HerokuApp
 */
enum HerokuColor{
    Green = "green",
    Red = "red",
    Blue = "blue"
}

enum WorkDays{
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday"
}

enum StatusCode{
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

enum SupportedBrowsers{
    Chrome = "cHroMe",
    Firefox = "Firefox",
    
}

let today:WorkDays = WorkDays.Monday;

let hpbanner:bannerInfo = {color: HerokuColor.Green, displaytext:"Fork me on Github",imageUrl:"link_to_image"}

interface HomePageOperation {}
class HomePageClass {}

let homePageOps:HomePageOperation = {}
let homePageClass:HomePageClass = new HomePageClass()
