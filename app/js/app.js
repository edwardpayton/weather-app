'use strict';

angular.module('weatherApp', [
  'ngRoute',
  'WeatherModule'
])
.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about-me', {templateUrl: 'templates/about.html'});
  $routeProvider.when('/', {templateUrl: 'templates/weather.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
