var express = require('express');

var app = express();
var bodyParser = require('body-parser');

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
	extended: false
}));

var cats = require('./cats.js')(app);


var server = app.listen(3000, function() {
	console.log('server running at http://127.0.0.1:3000/');
});