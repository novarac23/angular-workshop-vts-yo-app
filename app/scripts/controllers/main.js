'use strict';

/**
 * @ngdoc function
 * @name angularWorkshopStarterAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkshopStarterAppApp
 */
angular.module('angularWorkshopStarterAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
