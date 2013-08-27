document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", function(){
  expect(3);

  visit('/').then(function(){
    ok(findWithAssert(".image-component"));
    ok(findWithAssert(".audio-component"));
    ok(findWithAssert(".video-component"));
  });
});

