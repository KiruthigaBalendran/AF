'use strict';

// angular.module('HomeModule', ['ngRoute'])
//
//     .config(function ($routeProvider) {
//         $routeProvider
//             .when('/', {
//                 templateUrl: 'views/hello.html'
//             })
//             .when('/myOpdPatients', {
//                 templateUrl: 'views/my-opd-patients.html'
//             })
//     });


// angular.module('AuthenticationModule', ['ngRoute'])
// .config(function ($routeProvider, $locationProvider) {
//
//     $routeProvider
//
//         .when('/login', {
//             templateUrl: 'views/db-login-form.html',
//             controller: 'LoginController'
//         })
//         .when('/register', {
//             templateUrl: 'views/db-register-form.html',
//             controller: 'LoginController'
//         })
//         .when('/home', {
//             // redirectTo: 'views/hello.html',
//             templateUrl: 'views/hello.html',
//             controller: 'LoginController'
//         })
//         .otherwise({
//             redirectTo: '/login'
//         });
//
//     // $locationProvider.html5Mode(true);
//     // $locationProvider.hashPrefix('');
//
// });

// .controller('LoginController', function ($scope, $location) {
//     $scope.submit = (logData) => {
//         console.log(logData);
//         if (logData.username == 'test' && logData.password == 'test') {
//             $location.path('/home');
//             // $state.go('home')
//         }
//         else {
//             $location.path('/login');
//             console.log('wrong credentials');
//             alert('Wrong Credentials!');
//         }
//     }
// });
