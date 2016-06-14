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

  describe('Product list view', function() {
    beforeEach(function() {
      browser.get('app/index.html#/products');
    });

    it('should have the list of all products', function() {
      var productList = element.all(by.repeater('product in vm.products'));

      expect(productList.count()).toBe(4);
    });

    it('should allow add goods to basket list', function() {
      var productList = element.all(by.repeater('product in vm.products'));
      var basketList = element.all(by.repeater('product in vm.basketProducts'));

      expect(productList.count()).toBe(4);
      expect(basketList.count()).toBe(0);

      element(by.id('Peas')).click();

      expect(productList.count()).toBe(3);
      expect(basketList.count()).toBe(1);
    });

    it('should allow remove goods from basket list', function() {
      var productList = element.all(by.repeater('product in vm.products'));
      var basketList = element.all(by.repeater('product in vm.basketProducts'));

      expect(productList.count()).toBe(4);
      expect(basketList.count()).toBe(0);

      element(by.id('Peas')).click();

      expect(productList.count()).toBe(3);
      expect(basketList.count()).toBe(1);

      element(by.id('Peas')).click();

      expect(productList.count()).toBe(4);
      expect(basketList.count()).toBe(0);
    });
  });
});

