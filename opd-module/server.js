'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

const db = require('./config/db');
const port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

//mongodb
mongoose.connect(db.url, err => {
    if (err) {
        console.log('Unable to connect to MongoDB');
        console.log(err);
        process.exit(1);
    }
    console.log('Successfully connected to MongoDB');
});

app.use('/app', express.static(__dirname + '/public/'));
app.use('/app/modules', express.static(__dirname + '/bower_components'));
app.use('/app/assets', express.static(__dirname + '/assets'));


app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/app/*', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

//schema
require('./app/models/pvs-diagnose');
require('./app/models/pvs-patient');

//route
const pvsDiagnoseRoute  = require('./app/routes/pvs-diagnose.route.js');
const pvsPat  = require('./app/routes/pvs-pat-route');

app.use('/patientDiagnosis', pvsDiagnoseRoute);
app.use('/patient', pvsPat);

//server
app.listen(port, err => {
    if (err) {
        console.log('Error listening to port ' + port);
        return;
    }
    console.log('Keep an ear on ' + port);
});