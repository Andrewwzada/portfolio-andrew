import { test, expect } from '@playwright/test';
test('technology details work with keyboard and keep both languages',async({page})=>{
 await page.goto('/');await page.locator('#skills').scrollIntoViewIfNeeded();
 const selector=page.locator('#skills .tech-selector');
 for(const name of ['Python','JavaScript','HTML5','CSS3','MySQL','NoSQL','Linux','Windows Server','Git','GitHub','PowerShell','MikroTik','UniFi'])await expect(selector.getByRole('button',{name,exact:true})).toBeVisible();
 await selector.getByRole('button',{name:'MikroTik',exact:true}).click();
 const dialog=page.getByRole('dialog',{name:'MikroTik',exact:true});await expect(dialog).toContainText('roteamento');await expect(dialog.getByRole('button',{name:'Fechar competência'})).toBeFocused();await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);await expect(selector.getByRole('button',{name:'MikroTik',exact:true})).toBeFocused();
 await page.getByRole('button',{name:'Switch to English'}).click();await selector.getByRole('button',{name:'UniFi',exact:true}).click();await expect(page.getByRole('dialog',{name:'UniFi',exact:true})).toContainText('Enterprise Wi-Fi');
});
test('portrait is the edited local image',async({page})=>{await page.goto('/');const photo=page.locator('#about img');await expect(photo).toHaveAttribute('src',/andrew-professional.png$/);const response=await page.request.get((await photo.getAttribute('src'))!);expect(response.ok()).toBeTruthy()});
