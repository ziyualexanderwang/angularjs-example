/* global angular */

(function() {
  'use strict';

  /* App Config */

  angular
    .module('app')
    .config([
      '$routeProvider',
      config
    ]);

  function config($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'components/product.html',
        controller: 'ProductsCtrl',
        controllerAs: 'vm',
        resolve: {
          productPrepService: productPrepService
        }
      })
      .when('/checkout', {
        templateUrl: 'components/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'vm',
        resolve: {
          deliveryPrepService: deliveryPrepService
        }
      })
      .when('/finish', {
        templateUrl: 'components/finish.html'
      })
      .otherwise({
        redirectTo: '/products'
      });
  }

  productPrepService.$inject = ['productService'];
  function productPrepService(productService) {
    return productService.query().$promise;
  }

  deliveryPrepService.$inject = ['deliveryService'];
  function deliveryPrepService(deliveryService) {
    return deliveryService.query().$promise;
  }
})();

