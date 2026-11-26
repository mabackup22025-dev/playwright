# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.spec.js >> Globalsqa
- Location: tests\global.spec.js:2:1

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import{test} from'@playwright/test'
  2  | test('Globalsqa',async()=>{
> 3  |   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
     |   ^ ReferenceError: page is not defined
  4  |   const frame = page.getByRole('tab', { name: 'iFrame' }).click();
  5  |   await page.locator('iframe[name="globalSqa"]').contentFrame().getByText('All Automation Performance Testing Software Testing All Filter:').click();
  6  |   await page.locator('iframe[name="globalSqa"]').contentFrame().getByRole('link', { name: 'JMeter Training JMeter' }).click();
  7  |   await page.locator('iframe[name="globalSqa"]').contentFrame().locator('#wrapper iframe').contentFrame().locator('body').press('Alt+ArrowLeft');
  8  |   await page.getByRole('link', { name: 'Sortable' }).click();
  9  | });
  10 | 
  11 | 
  12 | 
```