import type heroku_app_operations = require("./heroku_app_operations");

export interface AddRemoveOperations extends heroku_app_operations.HerokuCommonOperations {
    getTitle(): string;
    addElement(count: number): boolean;
    removeElement(position: number): boolean;
    getElements(): string[];
}

