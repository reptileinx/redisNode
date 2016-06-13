var express = require('express');

var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

var mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/cats');

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
	extended: false
}));

var cats = require('./routes/cat.js')(app);

// create "middleware" 
var logger = morgan('combined');

app.use(morgan('combined'));


var server = app.listen(3000, function() {
	console.log('server running at http://127.0.0.1:3000/');
});
