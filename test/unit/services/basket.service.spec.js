/* global describe, angular, beforeEach, expect, it, inject */

'use strict';

describe('service', function() {
  var service;
  var product = {id: 'Peas', name: 'Peas'};
  var delivery = {id: 'nextday', price: 1.99, description: 'next day'};

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load modules
  beforeEach(module('app'));
  beforeEach(module('appServices'));

  // Test service availability
  it('check the existence of Product factory', inject(function(basketService) {
    expect(basketService).toBeDefined();
  }));

  beforeEach(inject(function(_basketService_) {
    service = _basketService_;
  }));

  it("should allow add product", function() {
    service.addProduct(product);
    expect(service.all()).toEqualData([{id: 'Peas', name: 'Peas'}]);
  });

  it("should allow remove product", function() {
    service.addProduct(product);
    service.delProduct(product);
    expect(service.all()).toEqualData([]);
  });

  it("should allow set delivery option", function() {
    service.setDelivery(delivery);
    expect(service.getDelivery()).toEqualData(delivery);
  });
});
