var express = require('express');

var app = express();

app.get('/', function (req, res){
	res.json({Hello : 'Reptileinx!'});
});

var server = app.listen(3000, function(){
	console.log('server running at http://127.0.0.1:3000/');
});