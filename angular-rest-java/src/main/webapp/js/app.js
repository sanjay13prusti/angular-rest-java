"use strict"
var qaApp = angular.module('qaApp', ['ngRoute', 'ngResource', 'wijspread', 'ui.bootstrap', 'dialogs', 'qaControllers', 'qaServices']);
qaApp.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider.
        when('/', {
            templateUrl: 'views/login.html'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html'
        }).
        when('/users/:userId', {
            templateUrl: 'views/modules.html',
            controller: 'ModuleController'
        }).
        when('/modules/:moduleId', {
            templateUrl: 'views/spread-sheet.html',
            controller: 'SheetController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);