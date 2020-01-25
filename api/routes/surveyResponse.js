const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling get request to /surveyResponse.'
    })
});

router.post('/', (req, res, next) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://' + req.headers.host);
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    res.status(200).json({
        message : 'Handling post request to /surveyResponse.'
    })
    debugger
});

router.get('/:surveyResponseId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message : 'Special Id is for you.',
            id : id
        })
    } else {
        res.status(200).json({
            message : 'no its not special Id'
        })
    }
});

module.exports = router;