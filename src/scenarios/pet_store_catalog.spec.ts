import { test, expect } from '@playwright/test';
import { PetStoreCatalogOperationClass } from '../operations/petstore_catalog_operations';

test('Petstore Catalog page should display all expected sidebar categories', async ({ page }) => {
  const catalogPage = await PetStoreCatalogOperationClass.create(page);
  const actualCategories = await catalogPage.getSidebarCategories();

  expect(actualCategories).toEqual(['Fish', 'Dogs', 'Reptiles', 'Cats', 'Birds']);
});
