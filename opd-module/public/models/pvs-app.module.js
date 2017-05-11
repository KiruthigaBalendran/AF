'use strict';

const pvsModule = angular.module('pvsApp',['ngRoute']);
// console.log('from pvs module angular');
pvsModule.config(function($routeProvider){

    $routeProvider

        .when('/prescription',{
            templateUrl: 'views/pvs-prescription.html'
        })

        .when('/laboratory',{
            templateUrl: 'views/pvs-laboratory.html'
        })

        .when('/diagnose',{
            templateUrl: 'views/pvs-diagnose.html'
        })

        .when('/visitList',{
            templateUrl: 'views/pvs-visitList.html'
        })

});