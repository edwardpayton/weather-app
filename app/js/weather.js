'use strict';

angular.module('WeatherModule', ['ngResource'])

.controller('WeatherController', ['$scope','WeatherApi', function($scope,WeatherApi) {

  // On load, run the search
  $scope.forecast = WeatherApi.search();

}])

.factory('WeatherApi', function($resource) {
    
  // My API id
  var appId = '3e76ab8892a25f4539b685e1b2482941';

  // Make the API call
  return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=Bristol',
    {
      APPID: appId,
      mode: 'json',
      callback: 'JSON_CALLBACK',
      units: 'metric',
      lang: 'en'
    },
    {
      search: {
        method: 'JSONP',
        isArray: false,
        headers: {
          'x-api-key': appId
        }
      }
    }
  )
})

.directive('weatherBlock',[function factory() {

  // Create the
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,

    scope: {
      dayForecast: '=dayIndex'
    },

    templateUrl: 'weatherTemplate.html',

    controller: ['$scope', function($scope) {
      // Prettify the date
      $scope.formatDate = function(time) {
        var theDate = new Date(time * 1000);
        return theDate;
      };
    }]
  }
}]);
