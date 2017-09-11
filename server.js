var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8000;

app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017',function(err){
	if(err){
		console.log("not connect");

	}
	else{
		console.log("connect");
	}
});
app.listen(port,function(){
	console.log('runing on '+port);
});
app.get('/home',function(req,res){
	res.send("helo");
});
