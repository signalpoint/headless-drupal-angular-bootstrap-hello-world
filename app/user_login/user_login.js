'use strict';

angular.module('myApp.user_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/login', {
    templateUrl: 'user_login/user_login.html',
    controller: 'UserLoginCtrl'
  });
}])

.controller('UserLoginCtrl', ['$scope', 'drupal', function($scope, drupal) {
      $scope.submit = function(user) {
        drupal.user_login(user.name, user.pass).then(function(data) {
            alert('Hello world and hello ' + data.user.name + '!');
        });
      };
}]);