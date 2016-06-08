'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp', ['highcharts-ng'])
  .controller('ChartsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
