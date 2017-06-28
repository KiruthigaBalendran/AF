/**
 * Created by Neruppuda on 6/28/2017.
 */
myOPDApp.factory('AddToQueueMessageService',['$http','$q',function () {
    var factory ={
        setToQueue: setToQueue,
        getToQueue: getToQueue
    }
    return factory;
    var patientToQueueNow={};

    function setToQueue(patientToQueue) {
        patientToQueueNow=patientToQueue;
        console.log(patientToQueueNow);
    }
    function getToQueue() {
        console.log(patientToQueueNow);
        return patientToQueueNow;
    }

}]);
