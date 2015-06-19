'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.user_login',
  'angular-drupal'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// Angular Drupal Configuration Settings
angular.module('angular-drupal').config(function($provide) {

    $provide.value('drupalSettings', {
        sitePath: 'http://localhost/headless-drupal/drupal',
        endpoint: 'api'
    });

});
