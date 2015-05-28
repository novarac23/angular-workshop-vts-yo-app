'use strict';

/**
 * @ngdoc overview
 * @name angularWorkshopStarterAppApp
 * @description
 * # angularWorkshopStarterAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularWorkshopStarterAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        resolve: {
          users: getAllUsers
        }
      })
      .otherwise({
        redirectTo: '/'
      });

      getAllUsers.$inject = ['Users']

      function getAllUsers(Users){
        return Users.all();
      }
  });
