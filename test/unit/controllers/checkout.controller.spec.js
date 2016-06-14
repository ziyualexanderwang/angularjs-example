/* global describe, angular, beforeEach, it, expect, inject */

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

  describe('CheckoutCtrl', function() {
    var ctrl;
    var product = {
      id: "Peas",
      name: "Peas",
      imageUrl: "img/products/peas.jpg",
      price: 0.95,
      currency: "£",
      units: "per bag"
    };
    var deliveries = [{
      id: "0",
      name: "nextday",
      description: "Next day delivery",
      price: 1.99,
      currency: "£"
    }, {
      id: "1",
      name: "free",
      description: "Free delivery: 3 working days",
      price: 0,
      currency: "£"
    }];

    beforeEach(inject(function(_$controller_) {
      ctrl = _$controller_('CheckoutCtrl', {
        deliveryPrepService: deliveries
      });
      ctrl.products.push(product);
    }));

    it('should return correct format', function() {
      expect(ctrl.formatTotalCosts()).toEqualData('Total Costs: £0.95');
    });

    it('should return correct format when set delivery', function() {
      ctrl.setDelivery(deliveries[0]);
      expect(ctrl.formatTotalCosts())
        .toEqualData('Total Costs: £2.94 (Next day delivery)');
    });

    it('should return correct format when set delivery', function() {
      ctrl.setDelivery(deliveries[1]);
      expect(ctrl.formatTotalCosts())
        .toEqualData('Total Costs: £0.95 (Free delivery: 3 working days)');
    });
  });
});
