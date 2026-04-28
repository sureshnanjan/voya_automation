import type { HerokuCommonOperations } from "../operations/heroku_app_operations.js";
import type home_page_operations = require("../operations/home_page_operations");
import { Page } from "@playwright/test";
import { getAppUrl } from "../utility/app_utils.js";
import { CheckboxOperations } from "../operations/checkbox_operations";

export class HerokuHomePageClass implements home_page_operations.HomePageOperation {
    private titleLocator;// = "h1";
    private page:Page;
    constructor(page) {
        this.page = page;
        this.titleLocator = page.locator(this.titleLocator)
        //this.goToHomePage();
    }

    static async create(page:Page) {
          const instance = new HerokuHomePageClass(page);
          // Do async initialization here
          await instance.navigate(); 
                     return instance;
        }
      
    async navigate(): Promise<void> {
        // Log the properties of 
        await this.page.goto(getAppUrl());
        //WebInteractions.navigateTo();
    }


    


    getSubTitle(): string {
        return this.titleLocator.textContent().then(text => text.trim());
    }
    getAvailableExamples(): string[] {
        throw new Error("Method not implemented.");
    }
    goToExample(exampleName: string): HerokuCommonOperations {
        throw new Error("Method not implemented.");
    }
    getBannerDetails(): { imageUrl?: string; color: string; displayText: string; } {
        throw new Error("Method not implemented.");
    }
    getTitle(): string {
        return this.titleLocator.textContent();
    }
}


export class HerokuCheckboxPageClass implements CheckboxOperations {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    static async create(page: Page) {
        const instance = new HerokuCheckboxPageClass(page);
        await instance.page.goto('https://the-internet.herokuapp.com/checkboxes');
        return instance;
    }

    getTitle(): string {
        return "Checkboxes";
    }

    isAnyCheckboxChecked(): boolean {
        // TODO: Implement Playwright logic
        return false;
    }

    getCheckedCheckbox(): string | null {
        // TODO: Implement Playwright logic
        return null;
    }

    toggleCheckbox(): void {
        // TODO: Implement Playwright logic
    }

    checkCheckbox(name: string): void {
        // TODO: Implement Playwright logic
    }

    uncheckCheckbox(name: string): void {
        // TODO: Implement Playwright logic
    }
}