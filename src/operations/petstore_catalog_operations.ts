import { Page } from '@playwright/test';

export interface PetStoreCatalogOperation {
  navigateToCatalogPage(): Promise<void>;
  getSidebarCategories(): Promise<string[]>;
}

export class PetStoreCatalogOperationClass implements PetStoreCatalogOperation {
  private readonly page: Page;
  private readonly sidebarCategoryLinks;

  constructor(page: Page) {
    this.page = page;
    this.sidebarCategoryLinks = this.page.locator('#SidebarContent a');
  }

  static async create(page: Page): Promise<PetStoreCatalogOperationClass> {
    const instance = new PetStoreCatalogOperationClass(page);
    await instance.navigateToCatalogPage();
    return instance;
  }

  async navigateToCatalogPage(): Promise<void> {
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  }

  async getSidebarCategories(): Promise<string[]> {
    const categories = await this.sidebarCategoryLinks.allInnerTexts();
    return categories.map((item) => item.trim()).filter((item) => item.length > 0);
  }
}
