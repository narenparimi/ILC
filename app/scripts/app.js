    var app = angular.module('formBuilderApp', ['ngRoute','dndLists','firebase']).config(function ($routeProvider, $locationProvider) {
        //'use strict';
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controllerAs: 'WizardsController' // map js to html scope
        }).when('/step1', {
            templateUrl: 'views/step1.html',
            controllerAs: 'FireBaseController'
        }).when('/step2', {
            templateUrl: 'views/step2.html',
            controllerAs: 'WizardsController'
        }).when('/step3', {
            templateUrl: 'views/step3.html',
            controllerAs: 'WizardsController'
        }).when('/step4', {
            templateUrl: 'views/step4.html',
            controllerAs: 'WizardsController'
        }).when('/step5', {
            templateUrl: 'views/step5.html',
            controllerAs: 'WizardsController'
        }).when('/step6', {
            templateUrl: 'views/final.html',
            controllerAs: 'WizardsController'
        }).otherwise({
            redirectTo: '/step1'
        });
        $locationProvider.html5Mode(true);
    }).directive('breadCrumb', function () {
        return {
            templateUrl: 'views/breadCrumbTemplate.html'
        };
    }).constant('FIREBASE_URL', 'https://popping-fire-7847.firebaseio.com/');