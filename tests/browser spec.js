import { test } from '@playwright/test'

//Task:1 -> launch amazon and search any product and click search button

test("Launch Amazon", async ({ page }) => {

    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("iphone 18 pro max")
    await page.locator('input[value="Go"]').click()
    await page.screenshot({ path: "./screenshot/amazon.png" })

})

//Task 2 - Launch Tools QA demosite, fill the form and submit

test("Launch ToolsQA_Demosite", async ({ page }) => {

    await page.goto("https://demoqa.com/text-box");
    console.log(await page.title());
    console.log(await page.url())

    await page.locator("#userName").fill("WhoAmI")
    await page.locator("#userEmail").fill("contactme@gmail.com");
    await page.locator('[placeholder = "Current Address"]').fill("Find ME on GOOGLE MAP");
    await page.locator("#permanentAddress").fill("Same as current address")
    await page.locator(".btn-primary").click();

})