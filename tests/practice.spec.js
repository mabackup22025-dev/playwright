import{test} '@playwright/test'
test{Multiple frames,async({page})=>{
  await page.goto('https://practice-automation.com/iframes/');
  const frame1=page.frameLocator('#iframe-1');
  await frame1.locator("//a[text()="MCP"]).click();
  await frame1.locator("//span[text()="Installation"]").click();
  const frame2=page.framelocator('#iframe-2');
  await frame2=page.locator("//a//span[text()="Documentation"]").click("");
  await frame2=page.locator("//").click();
}}
