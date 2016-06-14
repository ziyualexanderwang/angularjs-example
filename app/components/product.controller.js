/* global angular */

(function() {
  'use strict';

  angular
    .module('appControllers')
    .controller('ProductsCtrl', ProductsCtrl);

  ProductsCtrl.$inject = ['productPrepService', 'basketService'];

  /* @ngInject */
  function ProductsCtrl(productPrepService, basketService) {
    /* jshint validthis: true */
    var vm = this;

    vm.products = productPrepService;
    vm.basketProducts = basketService.all();
    vm.formatProduct = basketService.formatProduct;
    vm.addProduct = basketService.addProduct;
    vm.delProduct = basketService.delProduct;

    vm.isSelected = isSelected;

    // //////////////////

    function isSelected(product) {
      for (var i = 0; i < vm.basketProducts.length; i++) {
        if (vm.basketProducts[i].id === product.id) {
          return false;
        }
      }
      return true;
    }
  }
})();
