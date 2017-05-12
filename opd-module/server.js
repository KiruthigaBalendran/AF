'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const methodOverride = require('method-override');
const router = express.Router();
const routes = require('./app/routes/pr-patient.route')(router);
const path = require('path');

const app = express();

const db = require('./config/db');
const port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;
mongoose.connect(db.url, err => {
    if (err) {
        console.log('Unable to connect to MongoDB');
        console.log(err);
        process.exit(1);
    }
    console.log('Successfully connected to MongoDB');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/api',routes);
app.use('/app', express.static(__dirname + '/public/'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app/assets', express.static(__dirname + '/assets'));

// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/public/views/index.html');
// });

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(port, err => {
    if (err) {
        console.log('Error listening to port ' + port);
        return;
    }
    console.log('Keep an ear on ' + port);
});