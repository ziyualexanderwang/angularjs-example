/* global angular */

(function() {
  'use strict';

  /* App Module */

  angular
    .module('app', [
      'ngRoute',
      'appControllers',
      'appServices'
    ]);

  angular
    .module('appServices', [
      'ngResource'
    ]);

  angular.module('appControllers', []);
})();

