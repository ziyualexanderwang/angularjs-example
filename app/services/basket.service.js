/* global angular */

(function() {
  'use strict';

  angular
    .module('appServices')
    .factory('basketService', basketService);

  function basketService() {
    var products = [];
    var delivery = {};
    var service = {
      all: all,
      addProduct: addProduct,
      delProduct: delProduct,
      formatProduct: formatProduct,
      getDelivery: getDelivery,
      setDelivery: setDelivery
    };
    return service;

    // //////////////////

    function all() {
      return products;
    }

    function addProduct(product) {
      products.push(product);
    }

    function delProduct(product) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === product.id) {
          products.splice(i, 1);
          break;
        }
      }
    }

    function formatProduct(product) {
      return product.currency + product.price + ' ' + product.units;
    }

    function getDelivery() {
      return delivery;
    }

    function setDelivery(input) {
      delivery.id = input.id;
      delivery.description = input.description;
      delivery.price = input.price;
    }
  }
})();

