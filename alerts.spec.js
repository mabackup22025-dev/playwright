import {test} from "@playwright/test";
test('handling JS alerts',async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.getByRole('link',{name:'Elements'}).click();
    await page.getByText('Alerts,Frame & Windows').click();
    await page.locator('[href="/alerts"]').click();

    page.on('dialog',(Dialog)=>{
        console.log(Dialog.message());
        console.log(Dialog.type());

        if(Dialog.type() ==='alert'){
            console.log(Dialog.message())
            Dialog.accept()

        }else if(Dialog.type() ==='confirm'){
            console.log(Dialog.message())
            Dialog.dismiss()
        }else if(Dialog.type()=='prompt'){
            console.log(Dialog.message())
            Dialog.accept('muthu')
        }
    })
})