const puppeteer = require("puppeteer");
(async ()=> {
    const browser = await puppeteer.launch();
    const page  = await  browser.newPage();
    await page.goto("");
    await page.screenshot ({path:"amazon2"})
    await page.click("");
    


    await browser.close();

})();



