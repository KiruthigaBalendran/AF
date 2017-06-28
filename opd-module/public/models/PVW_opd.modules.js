/**
 * Created by Neruppuda on 5/2/2017.
 */

var myOPDApp = angular.module('OPDApp',['ngRoute']);
myOPDApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : 'views/PVW_dashboard.html'
        })
        .when('/MyOPDPatients',{
            templateUrl : 'views/PVW_MyOPDPatients.html'
        })
        .when('/MyQueue',{
            templateUrl : 'views/PVW_MyQueue.html'
        })
        .when('/PatientMoreInfo',{
            templateUrl : 'views/PVW_PatientMoreInfo.html'
        })
        .when('/AddToQueue',{
            templateUrl : 'views/PVW_AddToQueue.html'
        })
        .when('/token',{
            templateUrl : 'views/PVW_TokenView.html'
        })


}]);

