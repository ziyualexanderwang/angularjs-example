/* global describe, angular, beforeEach, it, inject, expect */

'use strict';

/* jasmine specs for controllers go here */
describe('App controllers', function() {
  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('app'));
  beforeEach(module('appControllers'));
  beforeEach(module('appServices'));

  describe('ProductsCtrl', function() {
    var ctrl;
    var products = [{name: 'Peas'}, {name: 'Milk'}];

    beforeEach(inject(function(_$controller_) {
      ctrl = _$controller_('ProductsCtrl', {
        productPrepService: products
      });
    }));

    it('should have "products" model with 2 products', function() {
      expect(ctrl.products).toEqualData(
        [{name: 'Peas'}, {name: 'Milk'}]);
    });

    it('should have "basket" model with 0 products', function() {
      expect(ctrl.basketProducts).toEqualData([]);
    });

    it('should allow add product to "basket"', function() {
      ctrl.addProduct({name: 'Peas', id: 'Peas'});

      expect(ctrl.basketProducts).toEqualData(
        [{name: 'Peas', id: 'Peas'}]);
    });

    it('should allow remove product to "purchasedProducts"', function() {
      ctrl.addProduct({name: 'Peas', id: 'Peas'});
      ctrl.addProduct({name: 'Milk', id: 'Milk'});
      ctrl.delProduct({name: 'Peas', id: 'Peas'});

      expect(ctrl.basketProducts).toEqualData(
        [{name: 'Milk', id: 'Milk'}]);
    });
  });
});

