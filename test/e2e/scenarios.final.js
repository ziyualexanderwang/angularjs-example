/* global describe, browser, by, beforeEach, it, element, expect */

'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('app', function() {
  it('should redirect index.html to index.html#/products', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/products');
    });
  });

  describe('Final view', function() {
    beforeEach(function() {
      browser.get('app/index.html#/products');
      element(by.id('Peas')).click();
      element(by.linkText('Checkout')).click();
      element.all(by.model('vm.deliveryName')).get(0).click();
      element(by.linkText('Confirm')).click();
    });

    it('should see selected goods list', function() {
      expect(element(by.tagName('h1')).getText()).toBe('Thank you!');
    });
  });
});

