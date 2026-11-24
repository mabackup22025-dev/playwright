import {test} from '@playwright/test'
test('open amazon',async({page})=>{
    await page.goto('https://www.amazon.com');
    await page.url();
    await page.goto('www.makemytrip.com');
    await page.title
    await page.goto('https://www.facebook.com');
    await page.goBack();
    await page.goBack();
})