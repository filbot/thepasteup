'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('MyCtrl1', function ($scope, $http) {

  var images = 'https://api.instagram.com/v1/users/11297623/media/recent/?access_token=11297623.d7eceb8.a6ea3d5821b44725939ba88e63d21459&callback=JSON_CALLBACK';

  $http.jsonp(images).success(function (data) {
    $scope.instagrams = data.data;
    console.log(data);
  }).error(function (data) {
  });

});