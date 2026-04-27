import {PSHomePageOperations} from "../operations/petstore-home-operations";
test('Add To Cart Check for correct URL', async ({ page }) => {
  //AAA - Arrange Act Assert
  const expectedCartUrl = "https://petstore.octoperf.com/actions/Cart.action;jsessionid=7AC8A2FC476AA672822B2E0CF035C935?viewCart=";
  // Click on the Add to Cart button for a specific product
  await page.click('a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-1"]');    
  // Wait for the navigation to complete
  await page.waitForNavigation();

  // Assert that the URL is correct
  const actualCartUrl = page.url();
  expect(actualCartUrl).toBe(expectedCartUrl);  
});

test('Add To Cart Check for correct Product Name in Cart', async ({ page }) => {
  //AAA - Arrange Act Assert
  const expectedProductName = "EST-1";
  // Click on the Add to Cart button for a specific product
  await page.click('a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-1"]');    
  // Wait for the navigation to complete
  await page.waitForNavigation();

  // Assert that the product name in the cart is correct
  const actualProductName = await page.textContent('css=selector-for-product-name');
  expect(actualProductName).toBe(expectedProductName);
});     

