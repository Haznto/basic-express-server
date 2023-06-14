'use strict';

// Server js

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const pageNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500')
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')
app.use(logger)
app.get('/', handleHome);
app.get('/person', validator, handlePerson)

app.use('*', pageNotFound);
app.use(serverError);

function handleHome(req, res) {
    res.status(200).json({
        code: 200,
        message: 'Welcome to Home page',
        time: req.stamper
    })
}

function handlePerson(req, res) {
    res.status(200).json({
        name: req.query.name
    })
}

function start(port) {
    app.listen(port, () => console.log('Up and running on port: ', port))
}

module.exports = {
    app,
    start
}