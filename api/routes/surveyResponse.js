const express = require('express');
const jsforce   = require('jsforce');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling get request to /surveyResponse.'
    })
});

router.post('/', (req, res, next) => {
    
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://mail.google.com');
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'amp@gmail.dev');
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    

        var conn = new jsforce.Connection({
          loginUrl : 'https://ap1.stmpb.stm.salesforce.com'
        });

        var username = 'hsinghbisht@sf.com';
        var password = 'test1234igS0FiOmk1gTU5KyTntpRVw4';
        conn.login(username, password, function(err, userInfo) {
          if (err) { return console.error(err); }
          console.log(conn.accessToken);
          console.log(conn.instanceUrl);
          console.log("User ID: " + userInfo.id);
          console.log("Org ID: " + userInfo.organizationId);

          var body = { invitationId: req.body.invitationId, npsResponse : req.body.npsResponse, textResponse : req.body.textResponse  };
            conn.apex.post("/api/survey", body, function(err, respon) {
            if (err) { 
                return console.error(err); 
            }
            console.log("response: ", respon);
            
            res.send(respon);
        });
    });
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