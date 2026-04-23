interface WebDriver{}
/**
 * 
 */
class ChromeDriver implements WebDriver{
    title:string;
    // Invoke Browser
    // Navigate to URL
    // Maximize Browser
    // Get Title of the Page
    // Get Current URL
    // Close Browser
    // Take Screenshot
}

class FireFoxDriver implements WebDriver{
    ff:string
    // Invoke Browser
    // Navigate to URL
    // Maximize Browser
    // Get Title of the Page
    // Get Current URL
    // Close Browser
    // Take Screenshot
}

/**
 * 
 * @param driver 
 * @returns 
 */
function invokeBrowser(driver:WebDriver):string{
 return "Browser Invoked"
}

class SafariDriver implements WebDriver{
    sb:string
    // Invoke Browser
    // Navigate to URL
    // Maximize Browser
    // Get Title of the Page
    // Get Current URL
    // Close Browser
    // Take Screenshot
}




// There is no com
let browser:WebDriver = new ChromeDriver();
browser = new FireFoxDriver();
browser = new SafariDriver();