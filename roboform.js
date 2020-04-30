const puppeteer = require('puppeteer');

const input_val = process.argv[2];

(async () => {

    console.log(input_val ? `Your input: ${input_val}` : `No input!`);
    const title = input_val ? input_val : `A title`;

    const browser = await puppeteer.launch(
        { headless: true } // default value is true
    );
    const page = await browser.newPage();
    await page.goto('https://www.roboform.com/filling-test-all-fields');

    await page.type('input[name="01___title"]', title);
    await page.select('select[name="40cc__type"]', '6');

    await page.screenshot({
        path: 'example.png',
        fullPage: false // default value is false
    });

    await browser.close();
})();