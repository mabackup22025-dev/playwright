import {test} from'@playwright/testt';

test('Handling Dropdown',async({})=>{
  await page.goto('https://www.amazon.in/');
  await page.getByTitle('Search in').selectOption('value:"search-alias=amazon-devices"');  
  await page.
  
});

