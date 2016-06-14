/* global angular */

(function() {
  'use strict';

  angular
    .module('appControllers')
    .controller('CheckoutCtrl', CheckoutCtrl);

  CheckoutCtrl.$inject = ['deliveryPrepService', 'basketService'];

  /* @ngInject */
  function CheckoutCtrl(deliveryPrepService, basketService) {
    /* jshint validthis: true */
    var vm = this;

    vm.delivery = basketService.getDelivery();
    vm.deliveries = deliveryPrepService;
    vm.delProduct = basketService.delProduct;
    vm.formatProduct = basketService.formatProduct;
    vm.products = basketService.all();
    vm.setDelivery = basketService.setDelivery;

    vm.formatTotalCosts = formatTotalCosts;

    // //////////////////

    function getTotalPrice() {
      var price = 0;

      for (var i = 0; i < vm.products.length; i++) {
        price += vm.products[i].price;
      }

      if (vm.delivery.price) {
        price += vm.delivery.price;
      }

      return price;
    }

    function formatTotalCosts() {
      var result = '';

      if (vm.products.length) {
        var sign = vm.products[0].currency;
        var price = getTotalPrice();

        if (vm.delivery.id) {
          result = 'Total Costs: ' + sign + price.toFixed(2) +
            ' (' + vm.delivery.description + ')';
        } else {
          result = 'Total Costs: ' + sign + price.toFixed(2);
        }
      }

      return result;
    }
  }
})();
