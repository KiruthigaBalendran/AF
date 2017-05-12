/**
 * Created by Neruppuda on 5/2/2017.
 */

var myOPDApp = angular.module('OPDApp',['ngRoute']);
myOPDApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : '../views/PVW_dashboard.html'
        })
        .when('/MyOPDPatients',{
            templateUrl : '../views/PVW_MyOPDPatients.html'
        })
        .when('/MyQueue',{
            templateUrl : '../views/PVW_MyQueue.html'
        })
        .when('/AddQuestionnaire',{
            templateUrl : '../views/PVW_AddQuestionnaire.html'
        })
        .when('/ViewQuestionnaire',{
            templateUrl : '../views/PVW_ViewQuestionnaire.html'
        })
        .when('/PatientMoreInfo',{
            templateUrl : '../views/PVW_PatientMoreInfo.html'
        })


}]);

