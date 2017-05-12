angular.module('approutes',['ngRoute'])
    .config(function ($routeProvider,$locationProvider) {
        console.log("Route Provider Initiated");
        $routeProvider.when('/register',{
            templateUrl: '/app/views/pr-patientRegistration.html',
            controller: 'registrationController',
            controllerAs : 'register'
        });

        //to remove the # from the url
        $locationProvider.html5Mode({
            enabled : true,
            requireBase : false
        });
    });