'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UrlCtrl
 * @description
 * # UrlCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UrlCtrl',['$location','$scope','urlSvc', function ($location,$scope,urlSvc) {
    angular.element('body').css('display','none');
    console.log($location.path().slice(1));
    urlSvc.goTo($location.path().slice(1)).then(function(res){
      window.location = res.data.original;
    });
  }]);
