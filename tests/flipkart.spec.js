import {test} from '@playwright/test'
test('Launch flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    const title1 = await page.title();
    console.log(title1);
    await page.goto('https://www.instagram.com/');
    const title2 = await page.title();
    console.log(title2);
    await page.goBack();
    console.log(await page.url());

})