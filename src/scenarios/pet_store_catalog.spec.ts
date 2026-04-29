import { test, expect } from '@playwright/test';
import { PetStoreCatalogOperationClass } from '../operations/petstore_catalog_operations';

test('Petstore Catalog page should display all expected sidebar categories', async ({ page }) => {
  const catalogPage = await PetStoreCatalogOperationClass.create(page);

  const isCatalogLoaded = await catalogPage.isCatalogPageLoaded();
  test.skip(
    !isCatalogLoaded,
    `Catalog page is not reachable in this environment. Redirected to: ${catalogPage.getCurrentUrl()}`
  );

  const actualCategories = await catalogPage.getSidebarCategories();

  expect(actualCategories).toEqual(['Fish', 'Dogs', 'Cats', 'Reptiles', 'Birds']);
});
