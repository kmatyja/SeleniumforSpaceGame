var wd = require('selenium-webdriver'),
 By = wd.By,
 until = wd.until,
 assert = require('assert'),
 expect = require('chai').expect,
 test = require('selenium-webdriver/testing');
 chrome = require('selenium-webdriver/chrome');

 
const timeout=30000;
test.describe('Test Suite', function(){
 this.timeout(timeout);
 test.it('First Test', function(){
   // var driver = new wd.Builder() 
   //  .forBrowser('chrome')
   //  .build();


var driver = new wd.Builder().forBrowser('chrome')
.setChromeOptions(new chrome.Options().addArguments('--headless'))
.build();

      
            console.log('Launching browser');


//   driver.get('https://localhost:5001/');
//   driver.manage().timeouts().implicitlyWait(50000);
//   driver.manage().window().maximize();
//   driver.findElement(By.xpath("//*[@id='details-button']")).click();
//   driver.findElement(By.xpath("//*[@id='proceed-link']")).click();
//   driver.findElement(By.xpath("/html/body/div/div/section[1]/div/p")).getText().then(function(title){
//       console.log(title)
//    expect(title).to.equal("An example site for learning");
//    driver.quit(); 
//    console.log("Test ended")
//   })

driver.get('https://www.wikipedia.org/');
driver.findElement(By.xpath("//*[@id='www-wikipedia-org']/h1/div/div")).getText().then(function(txt){
   console.log(txt)
   console.log('Test finished')
})
driver.quit();

 });
});