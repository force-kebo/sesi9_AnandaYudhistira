const { Builder, By, until } = require('selenium-webdriver');
// const assert = require('assert');

describe('Google Search Test', function () {
    let driver;

    it('Visit SauceDemo dan cek page title', async function () {
        driver = await new Builder().forBrowser('firefox').build();

        await driver.get('https://www.saucedemo.com/');

        let inputUsername = await driver.findElement(By.css('*[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@id="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))

        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        let buttonOption = await driver.findElement(By.css('*[data-test="product-sort-container'))
        await buttonOption.click()

        let buttonOptionSelect = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'))
        await buttonOptionSelect.click()

        await driver.sleep(1000)

        await driver.quit();

    });
});
