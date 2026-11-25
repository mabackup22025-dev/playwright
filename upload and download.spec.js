import { test } from '@playwright/test';
test('uploadFile',async({page})=>{
    await page.goto("https://uploadnow.io/");
    await page.locator('//input[@type="]').setInputFiles('D:\IMG-20260421-WA0005.jpg');
    console.log("Message adding file:"+ await page.locator('.cards_overlay_title-zKqBS'));
    await page.locator('button',{name:'valifate and upload'}).click();
    await page.getByRole('heading',{name:'All done!'}).waitFor({state:"visible"});

})

test('Download file',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    const [downloaded_file]= await promise.all([
    page.waitForEvent('download'),
    page.getByRole('button',{name:'Download'}).click()]);

await downloaded_file.saveAs("./Download/" + await downloaded_file.suggestedFilename());
})

