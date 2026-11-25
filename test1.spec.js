// // @ts-check
// import {test} from '@playwright/test';
// test(" launch flipkart ",async({page})=>{
//   await page.goto("https://www.flipkart.com")
//   const pageTitle = await page.title();
//   console.log(pageTitle);
//   const currentURL = page.url();
//  console.log(currentURL);
//   await page.goto("https://www.instagram.com")
//   ////const instaTitle = await page.title();
//   ///console.log(instaTitle);
//   const instaURL = page.url();
//    console.log(instaURL);
//    await page.goBack()
//    await page.goBack()


// })

// @ts-check
import { test, expect } from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
test ('Navigating to GoogleURL', async ({ page }) => {

  await page.goto('https://google.com');

  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

  //Sample Comment in FeatureBranch1 wnfosdv
  
});
