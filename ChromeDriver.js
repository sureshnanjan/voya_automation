"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
class ChromeDriver {
    title;
}
class FireFoxDriver {
    ff;
}
/**
 *
 * @param driver
 */
function invokeBrowser(driver) {
    return "Browser Invoked";
}
class SafariDriver {
    sb;
}
// There is no com
let browser = new ChromeDriver();
browser = new FireFoxDriver();
browser = new SafariDriver();
//# sourceMappingURL=ChromeDriver.js.map