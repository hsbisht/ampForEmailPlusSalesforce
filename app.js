const express = require('express');
const app = express();

const surveyResponseRoutes = require('./api/routes/surveyResponse');

app.use('/surveyResponse', surveyResponseRoutes);

module.exports = app;