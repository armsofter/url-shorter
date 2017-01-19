'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl',['urlSvc','$scope', function (urlSvc,$scope) {
    $scope.yourDomain = "http://localhost:9000/#/";
    $scope.shorted = "";
    $scope.originalUrl = "";
    $scope.sendUrl = function(){
      urlSvc.createNew({url:$scope.originalUrl}).then(function(res){
        $scope.shorted = res.data.shorted;
      });
    };
  }]);
