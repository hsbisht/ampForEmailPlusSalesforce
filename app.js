const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require("dotenv/config");
const surveyResponseRoutes = require('./api/routes/feedbackResponse');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());
 
app.use('/feedbackResponse', surveyResponseRoutes);


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