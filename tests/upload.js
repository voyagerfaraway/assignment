describe('file uploader', function(){

    it('upload the file successfully with the correct name', function(){

        let fileToUpload = 'upload_test.rtf';

        let path = require('path');

        let absolutePath = path.resolve(__dirname, fileToUpload);
        
        browser.waitForAngularEnabled(false);

        browser.get('http://the-internet.herokuapp.com/upload');

        element(by.id('file-upload')).sendKeys(absolutePath);

        element(by.id('file-submit')).click();

        let successfulUpload = element(by.id('content')).element(by.tagName('h3'));

        expect(successfulUpload.getText()).toEqual('File Uploaded!');

        let fileName = element(by.id('uploaded-files'));

        expect(fileName.getText()).toEqual(fileToUpload);
        
    });
});
