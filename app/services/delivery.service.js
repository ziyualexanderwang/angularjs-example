/* global angular */

(function() {
  'use strict';

  angular
    .module('appServices')
    .factory('deliveryService', deliveryService);

  deliveryService.$inject = ['$resource'];

  /* @ngInject */
  function deliveryService($resource) {
    return $resource('resources/deliveries/deliveries.json');
  }
})();
