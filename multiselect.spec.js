import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
  await page.getByRole('button', { name: 'Multi-Select' }).click();
  await page.getByRole('listbox').selectOption('option1');
  await page.getByRole('listbox').selectOption('option2');
  await page.getByRole('listbox').selectOption('option3');
  await page.getByRole('listbox').selectOption('option4');
   });