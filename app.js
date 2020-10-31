const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require("dotenv/config");
const surveyResponseRoutes = require('./api/routes/feedbackResponse');

/**
 * Middlewares...
 */

// Morgan : Used to log the requests..
app.use(morgan('dev'));

// body-parser: Used to parse data in urlenchoded or json format.
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());

app.use('/feedbackResponse', surveyResponseRoutes);

// Error handling....
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message 
        }
    })
});

module.exports = app;