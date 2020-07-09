// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['/Users/admin/Desktop/projects/protractorDemo/tests/nested_frames.js',
   '/Users/admin/Desktop/projects/protractorDemo/tests/dynamic_loading_1_2.js',
   '/Users/admin/Desktop/projects/protractorDemo/tests/upload.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
