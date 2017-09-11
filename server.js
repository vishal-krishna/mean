var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var User = require('./app/models/user');

//for logging with color code
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mean',function(err){
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
//http://localhost:8000/home
app.get('/home',function(req,res){
	res.send("helo");
});
//http://localhost:8000/user
app.post('/user',function(req,res){
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	if(req.body.username==null||req.body.username==''||req.body.password==null||req.body.password==''||req.body.email==null||req.body.email == ''){
		res.send("Make sure field not empty");
	}
	else{
		user.save(function(err){
			if(err) res.send("Already exist"); 
			res.send("usersaved");

		});
	}
});