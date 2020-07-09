describe('dynamic loading for both links, first link', function(){

    it('click start and confirm hello world to have appeared', function(){
        
        browser.waitForAngularEnabled(false);

        browser.get('http://the-internet.herokuapp.com/dynamic_loading/1');

        element(by.id('start')).element(by.tagName('button')).click();

        let result = element(by.id('finish')).element(by.tagName('h4'));

        let EC = browser.ExpectedConditions;

        browser.wait(EC.visibilityOf(result), 6000);

        expect(result.getText()).toEqual('Hello World!');

    });
});
