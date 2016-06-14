/* global describe, browser, beforeEach, it, by, element, expect */

'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('app', function() {
  it('should redirect index.html to index.html#/products', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/products');
    });
  });

  describe('Checkout view', function() {
    beforeEach(function() {
      browser.get('app/index.html#/products');
      element(by.id('Peas')).click();
      element(by.id('Milk')).click();
      element(by.linkText('Checkout')).click();
    });

    it('should see selected goods list', function() {
      var basketList = element.all(by.repeater('product in vm.products'));

      expect(basketList.count()).toBe(2);
    });

    it('should allow remove from basket', function() {
      var basketList = element.all(by.repeater('product in vm.products'));
      element(by.id('Peas')).click();

      expect(basketList.count()).toBe(1);
    });

    it('should change state', function() {
      var deliveryName = element(by.binding('vm.deliveryName'));

      element.all(by.model('vm.deliveryName')).get(0).click();

      expect(deliveryName.getText()).toContain('nextday');
    });

    it('should see total value', function() {
      element(by.id('Milk')).click();
      element.all(by.model('vm.deliveryName')).get(0).click();
      expect(element(by.id('totalCosts')).getText())
        .toEqual('Total Costs: £2.94 (Next day delivery)');
    });
  });
});

