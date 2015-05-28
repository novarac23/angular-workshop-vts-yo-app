'use strict';

/**
 * @ngdoc function
 * @name angularWorkshopStarterAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWorkshopStarterAppApp
 */
angular
  .module('angularWorkshopStarterAppApp')
  .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['$scope', 'Users', 'users'];

  function UsersCtrl($scope, Users, users) {
    $scope.users = users;

    $scope.test = 'TESTSTUFF';

    $scope.getUsers = getUsers;

    function getUsers() {
      console.log($scope.users);
    }
  };
