describe('nested frames', function(){

    it('confirm that each frame has the correct word inside', function(){
        
        browser.waitForAngularEnabled(false);

        browser.get('http://the-internet.herokuapp.com/nested_frames');

        browser.switchTo().frame(element(by.name('frame-top')).getWebElement());
        
        browser.switchTo().frame(element(by.name('frame-middle')).getWebElement());

        let middle = element(by.id('content'));

        expect(middle.getText()).toEqual('MIDDLE');

        browser.switchTo().defaultContent();

        browser.switchTo().frame(element(by.name('frame-top')).getWebElement());

        browser.switchTo().frame(element(by.name('frame-left')).getWebElement());

        let left = element(by.tagName('body'));

        expect(left.getText()).toEqual('LEFT');

        browser.switchTo().defaultContent();

        browser.switchTo().frame(element(by.name('frame-top')).getWebElement());

        browser.switchTo().frame(element(by.name('frame-right')).getWebElement());

        let right = element(by.tagName('body'));

        expect(right.getText()).toEqual('RIGHT');

        browser.switchTo().defaultContent();

        browser.switchTo().frame(element(by.name('frame-bottom')).getWebElement());

        let bottom = element(by.tagName('body'));

        expect(bottom.getText()).toEqual('BOTTOM');

    });
});
