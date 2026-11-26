import{test} from'@playwright/test'
test('Globalsqa',async({page})=>{
await page.goto("https://globalsqa.com/demo-site/frames-and-windows/#iFrame");
const frame=page.frameLocator("//iframe[@class=' lazyloaded']");
await frame.locator("//img[@alt='JMeter Training']").click();
await frame.locator("//div[@id='mobile_menu_toggler']").click();
await frame.getByRole('link',{name:'About'}).click();
await frame.getByRole('link',{name:'Load More'}).click();
});

