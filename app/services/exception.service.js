/* global angular */

(function() {
  'use strict';

  angular
    .module('appServices')
    .factory('exception', exception);

  exception.$inject = ['$log'];

  function exception($log) {
    var service = {
      catcher: catcher
    };
    return service;

    function catcher(message) {
      return function(reason) {
        $log.error(message, reason);
      };
    }
  }
})();

