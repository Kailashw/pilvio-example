var express = require('express')
var app = express()
app.use(express.json())

const AUTH_ID = 'MAYTC1NWJJYJDLMTMWMJ';
const AUTH_TOKEN = 'MTM2MDY2MDAwY2QyMmE0YjRlNzMzZjI4NTA2M2Y1';

app.post('/api/makecall', function (req, res) {
    var plivo = require('plivo');
    var client = new plivo.Client(AUTH_ID, AUTH_TOKEN);
    console.log(req.body);
    try {
        // client.calls.create(
        //     req.body.from,                                          // from
        //     req.body.to,                                            // to
        //     "http://s3.amazonaws.com/static.plivo.com/answer.xml", // answer url
        //     {
        //         answerMethod: "GET",
        //         time_limit: 300             // defaults to 5 minutes now
        //     },
        // ).then(function (response) {
        //     console.log(response);
        //     res.send(response)
        // }, function (err) {
        //     console.error(err);
        //     res.send(err)
        // });
    } catch (error) {
        console.error('catch error', error);
        res.send(error);
    }
})

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});