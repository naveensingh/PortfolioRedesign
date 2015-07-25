'use strict';

/**
 * @ngdoc function
 * @name naveensinghApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the naveensinghApp
 */
angular.module('naveensinghApp')
  .controller('WorkCtrl', function ($scope) {
    $scope.NaveenSingh = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
