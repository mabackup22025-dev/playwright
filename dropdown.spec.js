import { test } from '@playwright/test';

test('multidropdown', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
  await page.getByRole('button', { name: 'Multi-Select' }).click();
  await page.getByRole('listbox').selectOption('option1');
  await page.getByRole('listbox').selectOption('option2');
  await page.getByRole('listbox').selectOption('option3');
  await page.getByRole('listbox').selectOption('option4');
})


test('styled dropdown', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
  await page.getByRole('button', { name: 'Styled Dropdown' }).click();
  await page.getByRole('combobox').selectOption('option2');
  await page.getByRole('combobox').selectOption('option1');
  await page.getByRole('combobox').selectOption('option3');
})

test('singledropdown',async({page})=>{
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
  await page.locator('//button[@data-target="simple-dropdown"]').click();
  await page.locator('#simple-dropdown select').selectOption('option2');
})