import { test } from '@playwright/test';

test('Multiple frames', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');

    // Frame 1
    const frame1 = page.frameLocator('#iframe-1');

    await frame1.locator('//a[text()="MCP"]').click();
    await frame1.locator('//span[text()="Installation"]').click();

    // Frame 2
    const frame2 = page.frameLocator('#iframe-2');

    await frame2.locator('//span[text()="Documentation"]').click();

});