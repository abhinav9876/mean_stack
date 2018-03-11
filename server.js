var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hello',function(err){
	if(err){
		console.log('db is not connected  :'+err);
		}
	else{
		console.log('db is connected');
		}
});

app.get('/',function(req,res){
	res.send('hello world');
});

app.use(morgan('dev'));

app.get('/home',function(req,res){
	res.send('hello from home');
});

app.listen(port,function(){
	console.log('Running server at port '+port+'...');

});

