import { test, expect } from '@playwright/test';
import { HomePageOperation } from '../operations/home_page_operations';
import { HerokuHomePageClass } from '../implementation-web/heroku_home_page';
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