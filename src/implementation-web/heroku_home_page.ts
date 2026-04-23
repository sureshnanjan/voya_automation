import type { HerokuCommonOperations } from "../operations/heroku_app_operations.js";
import type home_page_operations = require("../operations/home_page_operations");
import { Page } from "@playwright/test";
import { getAppUrl } from "../utility/app_utils.js";

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