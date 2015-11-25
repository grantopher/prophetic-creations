var express = require('express');
var app = express();
var db = require('../db.js');

app.post('/user', function (request, response) {
    response.send('It worked!!');
});

app.get('/api/user', function (request, response) {
    // get
});

app.put('/api/user', function (request, response) {
    // update
});

app.delete('/api/user', function (request, response) {
    // delete
});