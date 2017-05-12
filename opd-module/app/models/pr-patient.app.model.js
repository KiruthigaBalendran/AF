var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    firstName: { type:String, required: true},
    lastName: { type:String, required: true},
    nic:{type:String,required: true, unique: true},
    dateOfBirth : {type:Date},
    gender:{type:String},
    marritalStatus : {type:String},
    disease : {type:String}
});

module.exports = mongoose.model('patient',patientSchema);
