import type abtesting_operations = require("./abtesting_operations");
import type heroku_app_operations = require("./heroku_app_operations");
export interface HomePageOperation {
    getTitle(): string;
    getSubTitle(): string;
    getAvailableExamples(): string[];
    goToExample(exampleName: string): heroku_app_operations.HerokuCommonOperations;
    getBannerDetails(): {imageUrl?: string, color: string, displayText: string};

}
let myname = "Voya Automation";
//myname = 100;

// Launch Home Page 
// Navigate to AB Test
// 