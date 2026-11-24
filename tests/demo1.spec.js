import {test} from '@playwright/test';

test('locator',async({page})=>{
    await page.goto('https://www.amazonin/');
    await page.locator('#twotabsearchtextbox').fill('Iqoo neo 10');
    await page.locator('nav-search-submit-button').click();
})