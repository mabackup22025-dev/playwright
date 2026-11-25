import {test} from "@playwright/test";
test('popups handling',async({page})=>{
    await page.goto("https://flipshop.com/deals");
    await page.click("#signuplogin_btn");
    try{
        await page.waitForSelector("#_r_14",{time:5000});
        await page.click("#_r_14");

    }catch(error){
        console.log("No Popup");
    }
})