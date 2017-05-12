angular.module('patientService',[])
.factory('patient', function ($http) {
    patientFactory = {};
    console.log("service initiated!!");
    patientFactory.create = function (regData) {
    	console.log(regData);
        return $http.post('api/patients',regData);
    }
    return patientFactory;
})