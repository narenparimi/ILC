    angular.module('formBuilderApp',['ngRoute']).config(function($routeProvider){
    //'use strict';
    $routeProvider.when('/home',{
            templateUrl: 'app/views/home.html',
            controllerAs: 'WizardsController'// map js to html scope
    }).when('/step1',{
            templateUrl: 'app/views/step1.html',
            controllerAs: 'WizardsController' 
        }).when('/step2',{
            templateUrl: 'app/views/step2.html',
            controllerAs: 'WizardsController' 
        }).when('/step3',{
            templateUrl: 'app/views/step3.html',
            controllerAs: 'WizardsController' 
        }).when('/step4',{
            templateUrl: 'app/views/step4.html',
            controllerAs: 'WizardsController' 
        }).when('/step5',{
            templateUrl: 'app/views/step5.html',
            controllerAs: 'WizardsController' 
        }).when('/step6',{
            templateUrl: 'app/views/final.html',
            controllerAs: 'WizardsController' 
        }).otherwise({
            redirectTo : '/step1'
        });
});    