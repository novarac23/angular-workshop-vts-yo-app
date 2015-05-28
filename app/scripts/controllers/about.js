'use strict';

/**
 * @ngdoc function
 * @name angularWorkshopStarterAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWorkshopStarterAppApp
 */
angular.module('angularWorkshopStarterAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
