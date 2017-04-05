'use strict';

/**
 * @ngdoc overview
 * @name kimberlyApp
 * @description
 * # kimberlyApp
 *
 * Main module of the application.
 *
 * Hi Kimberly,
 *
 * If you want to add pages here and javascript code, check out the $routeProvider below.
 */

angular
  .module('kimberlyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
      })
	  .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/legalrss', {
        templateUrl: 'views/resources.html',
        controller: 'LegalRssCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
