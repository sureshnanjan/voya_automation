import type heroku_app_operations = require("./heroku_app_operations");

export interface ABTestingOperations extends heroku_app_operations.HerokuCommonOperations {
    getTitle(): string;
    getDescription(): string;
    disableABTest(): boolean;
}

// TC1 - Positive - I need to be going to option 1 or 2
// TC2 - I disable AB Test and verify that I am going to option NO AB Test