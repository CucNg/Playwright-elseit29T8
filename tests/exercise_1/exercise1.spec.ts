import {test} from  '@playwright/test';

test('Navigate to example page', async({page})=>{

    await page.goto('https://gitlab.com/');
    await page.waitForLoadState('networkidle');
    await page.reload();
})