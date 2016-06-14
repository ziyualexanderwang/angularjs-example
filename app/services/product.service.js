/* global angular */

(function() {
  'use strict';

  angular
    .module('appServices')
    .factory('productService', productService);

  productService.$inject = ['$resource'];

  /* @ngInject */
  function productService($resource) {
    return $resource('resources/products/products.json');
  }
})();
