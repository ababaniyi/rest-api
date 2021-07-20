var express = require('express');
var app = express();
app.use(express.json());

var processBody = function(body, version) {
    console.log('Processing input data: ' + body.data);
    var tokens = body.data.split("0000");

    var firstName = '';
    var lastName = '';
    var clientId = '';

    var tokensTemp = tokens[1].split("000");

    if (version === 1) {
        firstName = tokens[0] + '0000'; 
        lastName = tokensTemp[0] + '000';
        clientId = tokensTemp[1];
    } else {
        firstName = tokens[0];
        lastName = tokensTemp[0];
        clientId = tokensTemp[1];
    }

    const jsonValue = {
        statusCode: 200,
        data: {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    };

    return jsonValue;
};

app.post('/api/v1/parse', function (req, res) {
    res.json(processBody(req.body, 1));
 });

 app.post('/api/v2/parse', function (req, res) {
    res.json(processBody(req.body, 2));
 });

module.exports = app;