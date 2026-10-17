import {test,expect} from '@playwright/test';
test('navigation, language and layout',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{level:1})).toContainText('ANDREW');await expect(page.locator('main section[id]')).toHaveCount(8);await expect(page.locator('#experience, a[href="#experience"], .sound-toggle, audio')).toHaveCount(0);await expect(page.locator('body')).not.toContainText('SOUTECHGROUP');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();await page.getByRole('button',{name:'Switch to English'}).click();await expect(page.locator('html')).toHaveAttribute('lang','en');await expect(page.getByRole('heading',{name:'Software Engineering',exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Send message',exact:true})).toBeEnabled()});
test('terminal is simulated and supports clear',async({page})=>{await page.goto('/');const input=page.getByRole('textbox',{name:'Comando do terminal'});await input.fill('projects');await input.press('Enter');await expect(page.getByRole('log')).toContainText('Portfólio interativo');await input.fill('rm -rf /');await input.press('Enter');await expect(page.getByRole('log')).toContainText('Comando não encontrado');await input.fill('clear');await input.press('Enter');await expect(page.getByRole('log')).toBeEmpty()});
test('certificates filter, accessible modal and original documents',async({page})=>{await page.goto('/');const section=page.locator('#certificates');await section.scrollIntoViewIfNeeded();await expect(section.locator('.cert-card')).toHaveCount(10);await section.getByRole('button',{name:'Redes',exact:true}).click();await expect(section.locator('.cert-card')).toHaveCount(3);const button=section.getByRole('button',{name:'Ampliar OSPF',exact:true});await button.click();await expect(page.getByRole('dialog')).toBeVisible();const link=page.getByRole('link',{name:'Abrir documento original completo'});const response=await page.request.get((await link.getAttribute('href'))!);expect(response.ok()).toBeTruthy();expect(response.headers()['content-type']).toContain('pdf');await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);await expect(button).toBeFocused()});
test('skill tabs support keyboard',async({page})=>{await page.goto('/');const tab=page.getByRole('tab',{name:/Infraestrutura e Servidores/});await tab.focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tabpanel')).toContainText('MikroTik');await expect(page.getByRole('tab',{name:/Redes e Conectividade/})).toHaveAttribute('aria-selected','true')});
test('projects and social links remain usable across languages and viewports',async({page})=>{
  const errors:string[]=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto('/');
  const projects=page.locator('#projects');
  await projects.scrollIntoViewIfNeeded();
  await expect(projects.locator('.project-card')).toHaveCount(2);
  await expect(projects.getByRole('heading',{name:'N2 Collector'})).toBeVisible();
  await expect(projects.locator('.project-status')).toHaveText('Em desenvolvimento');
  const repo=projects.getByRole('link',{name:'Ver no GitHub'});
  await expect(repo).toHaveAttribute('href','https://github.com/Andrewwzada/n2-collector');
  await expect(repo).toHaveAttribute('target','_blank');
  await expect(projects.getByRole('link',{name:'Explorar este projeto'})).toHaveAttribute('href','#home');
  for(const width of [1440,820,390]){
    await page.setViewportSize({width,height:900});
    const boxes=await projects.locator('.project-card').evaluateAll(nodes=>nodes.map(node=>{const r=node.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width}}));
    if(width>760)expect(Math.abs(boxes[0].y-boxes[1].y)).toBeLessThan(2);
    else expect(boxes[1].y).toBeGreaterThan(boxes[0].y);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  }
  const contact=page.locator('#contact');
  await contact.scrollIntoViewIfNeeded();
  for(const [name,url] of [['GitHub','https://github.com/Andrewwzada'],['Instagram','https://www.instagram.com/andrewwzada/']]){
    const link=contact.getByRole('link',{name:new RegExp(name)});
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href',url);
    await expect(link).toHaveAttribute('target','_blank');
  }
  await page.getByRole('button',{name:'Switch to English'}).click();
  await expect(projects.locator('.project-status')).toHaveText('In development');
  await expect(projects.getByRole('link',{name:'View on GitHub'})).toHaveAttribute('href','https://github.com/Andrewwzada/n2-collector');
  await projects.scrollIntoViewIfNeeded();
  const card=projects.locator('.project-n2-collector');
  await card.hover();
  if(await page.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)){
    await expect(card).toHaveCSS('transform','none');
    await expect(card.locator('.collector-scan')).toHaveCSS('animation-name','none');
  }
  expect(errors).toEqual([]);
});
