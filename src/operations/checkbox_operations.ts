import type heroku_app_operations = require("./heroku_app_operations");

export interface CheckboxOperations extends heroku_app_operations.HerokuCommonOperations {
    getTitle(): string;
    // Checks if any checkbox is already checked when the page loads
    isAnyCheckboxChecked(): boolean;

    // Returns the index or name of the checked checkbox, or null if none
    getCheckedCheckbox(): string | null;

    // Unchecks the currently checked checkbox and checks the other one
    toggleCheckbox(): void;

    // Optionally, check a specific checkbox by name or index
    checkCheckbox(name: string): void;

    // Optionally, uncheck a specific checkbox by name or index
    uncheckCheckbox(name: string): void;
}

