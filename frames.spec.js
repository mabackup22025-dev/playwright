import{test} from"@playwright/test"
test("Frame Handling",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frame1= page.frameLocator("frame").locator("")


})