var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagnoseSchema = new Schema({
    complaint : {type:String, required:true},
    visitType : {type:String, required:true},
    remarks : {type:String},
    visitDate : {type:Date},
    visitTime : {type:Date},
    doctor : {type : String, required:true}
});

module.exports = mongoose.model('patientDiagnosis', diagnoseSchema);