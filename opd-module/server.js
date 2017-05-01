'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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

app.use('/', express.static(__dirname + '/public'));
app.use('/app/modules', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port, err => {
    if (err) {
        console.log('Error listening to port ' + port);
        return;
    }
    console.log('Keep an ear on ' + port);
});