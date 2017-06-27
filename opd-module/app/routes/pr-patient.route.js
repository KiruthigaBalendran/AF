//from the current file go 2 steps back, that is app directory
// then go to patient-model file
const registration = require('../models/pr-patient.app.model.js');

module.exports = function (router) {
    console.log("module initiated!");
    router.post('/patients', function (req,res) {
        console.log("post received!!",req.body);
    const register = new registration(req.body);
    // register.firstName = req.body.firstName;
    // register.lastName = req.body.lastName;
    // register.nic = req.body.nic;
    // register.dateOfBirth = req.body.dateOfBirth;
    // register.gender = req.body.gender;
    // register.marritalStatus = req.body.marritalStatus;
    // register.disease = req.body.disease;


    if(register.nic == null || register.nic == " " ){
        res.json({success:false , message :'Ensure nic is provided' });
    }
    else {
        //validate the user, uniqueness
        register.save(function (err) {
            if (err){
                console.log(err);
                //res.json({success:false , message :'Patient already exists' });
            }
            else{
                res.json({success:true , message :'patient created' });
            }
        });

    }


});



    router.get('/patients', function(req, res) {
    registration.find().exec().then(patients => {
        res.json(patients);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
return router;
}



