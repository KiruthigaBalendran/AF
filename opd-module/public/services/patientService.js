
'use strict';

var pvsModule = angular.module('pvsApp');

pvsModule.factory('OService',['$http',
    function ($http)
    {
        console.log('from service');
        return{
            get: () => $http.get('/patient').then(response =>response.data),
            post:(patientVi) => $http.post('/patient', patientVi).then(response=>response.data)


        };
    }]);
