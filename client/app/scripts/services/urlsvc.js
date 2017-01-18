'use strict';

/**
 * @ngdoc service
 * @name clientApp.urlSvc
 * @description
 * # urlSvc
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('urlSvc',['$http', function ($http) {
    return {
      createNew: function (data) {
        return $http({
          method: 'POST',
          data: data,
          url: "http://localhost:3000/create",
          headers: {
            "content-type": "application/json"
          }
        });
      },
      goTo: function (data) {
        return $http({
          method: 'GET',
          url: "http://localhost:3000/" + data,
          headers: {
            "content-type": "application/json"
          }
        });
      }
    };
  }]);
