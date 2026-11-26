import { test } from '@playwright/test';

test('Launch Browser', async ({ browser }) => {

  const context1 = await browser.newContext();
  const page3 = await context1.newPage();

  await page3.goto('https://www.flipkart.com/');
});

test('Search Navigation', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

  await page.locator('#twotabsearchtextbox').fill('Box');
  await page.locator('#nav-search-submit-button').click();
});

test('Demo UI Test', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Muthu');
  await page.locator("input[placeholder='name@example.com']").fill('muthu@456');

  await page.locator('textarea[placeholder="Current Address"]')
    .fill('Chennai Porur');

  await page.locator('#permanentAddress')
    .fill('Chennai Porur');

  await page.locator('#submit').click();
});