import { Page } from '@playwright/test';

export interface PetStoreCatalogOperation {
  navigateToCatalogPage(): Promise<void>;
  isCatalogPageLoaded(): Promise<boolean>;
  getCurrentUrl(): string;
  getSidebarCategories(): Promise<string[]>;
}

export class PetStoreCatalogOperationClass implements PetStoreCatalogOperation {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  static async create(page: Page): Promise<PetStoreCatalogOperationClass> {
    const instance = new PetStoreCatalogOperationClass(page);
    await instance.navigateToCatalogPage();
    return instance;
  }

  async navigateToCatalogPage(): Promise<void> {
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    // Wait up to 90 seconds for the Petstore catalog page to load (allows manual SSO login)
    await this.page.waitForURL(
      (url) =>
        url.hostname === 'petstore.octoperf.com' &&
        url.pathname.toLowerCase().includes('/actions/catalog.action'),
      { timeout: 90000 }
    );
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#SidebarContent a', { timeout: 10000 });
  }

  async isCatalogPageLoaded(): Promise<boolean> {
    try {
      const currentUrl = new URL(this.page.url());
      const isPetstoreHost = currentUrl.hostname === 'petstore.octoperf.com';
      const isCatalogPath = currentUrl.pathname.toLowerCase().includes('/actions/catalog.action');
      const sidebarCount = await this.page.locator('#SidebarContent a').count();
      return isPetstoreHost && isCatalogPath && sidebarCount > 0;
    } catch {
      return false;
    }
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async getSidebarCategories(): Promise<string[]> {
    await this.page.waitForSelector('#SidebarContent a', { timeout: 5000 });

    const hrefs = await this.page
      .locator('#SidebarContent a')
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href') ?? ''));

    return hrefs
      .map((href) => {
        try {
          const parsed = new URL(href, 'https://petstore.octoperf.com');
          const id = parsed.searchParams.get('categoryId');
          if (!id) {
            return '';
          }
          const normalized = id.toLowerCase();
          return normalized.charAt(0).toUpperCase() + normalized.slice(1);
        } catch {
          return '';
        }
      })
      .filter((item) => item.length > 0);
  }
}
