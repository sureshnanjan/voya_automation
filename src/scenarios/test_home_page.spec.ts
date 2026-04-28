import { test, expect } from '@playwright/test';
import { HomePageOperation } from '../operations/home_page_operations';
import { HerokuCheckboxPageClass, HerokuHomePageClass } from '../implementation-web/heroku_home_page';
import { CheckboxOperations } from '../operations/checkbox_operations';

test('Home Page Title Check', async ({ page }) => {
  // Page Object Usage
  let homePageOperation: HomePageOperation = await HerokuHomePageClass.create(page);
  const expectedTitle = "Welcome to Internet";
  //Act
  const actualTitle = homePageOperation.getTitle();
  expect(actualTitle).toBe(expectedTitle);
});

test.skip("Home Page Title Check with Playwright", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('heading', { name: 'Welcome to the-internet1' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  });

  test('Checkbox Check', async ({ page }) => {
  let checkboxPage: CheckboxOperations = await HerokuCheckboxPageClass.create(page);

  // Check if any checkbox is checked
  const isChecked = await checkboxPage.isAnyCheckboxChecked();
  expect(isChecked).toBe(true);

  // Get which checkbox is checked
  const checkedName = await checkboxPage.getCheckedCheckbox();
  expect(checkedName).toBe('checkbox2'); // or whatever is expected

  // Toggle: Uncheck the current and check the other
  await checkboxPage.toggleCheckbox();

  // Assert: Now the other checkbox should be checked
  const newCheckedName = await checkboxPage.getCheckedCheckbox();
  expect(newCheckedName).toBe('checkbox1');
});