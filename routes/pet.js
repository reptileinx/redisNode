var r = require('request').defaults({
    json: true
});

var async = require('async');
//var redis = require('redis');
//var client = redis.createClient(6379, '127.0.0.1');

module.exports = function(app) {

    /* read */
    app.get('/pets', function(req, res) {
        r({
            uri: 'http://localhost:3001/dog'
        }, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                res.json(body);
            } else {
                res.send(response.statusCode);

            }

        });

    });

     /* read */
    app.get('/pets', function(req, res) {
        r({
            uri: 'http://localhost:3002/cat'
        }, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                res.json(body);
            } else {
                res.send(response.statusCode);

            }

        });

    });


};