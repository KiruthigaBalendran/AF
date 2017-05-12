'use strict';

// angular.module('MainModule', ['HomeModule']);

const mainModule = angular.module('MainModule', ['ngRoute']);

mainModule.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/db-doctor-dashboard.html'
        })

        .when('/myOpdPatients', {
            templateUrl: 'views/my-opd-patients.html'
        })

        .when('/myQueue', {
            templateUrl: 'views/my-queue.html'
        })

        .when('/addQuestion', {
            templateUrl: 'views/add-questions.html'
        })

        .when('/viewQuestion', {
            templateUrl: 'views/view-questions.html'
        })
});

