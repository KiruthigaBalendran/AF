var app = angular.module('viewPatientService',[])

app.factory('viewPatientService', ['$http',
    function($http){
        return {
            getPatientDetails: () => $http.get('http://localhost:3030/patients').then(response => response.data)
        };
    }]);