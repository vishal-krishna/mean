var express    = require('express');
var app        = express();
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var port       = process.env.PORT || 8000;
var router     = express.Router();
var appRoutes  = require('./app/routes/api')(router);
var path       = require('path');

app.use(morgan('dev')); //for logging on admin cmd with color code
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname+'public'))
app.use('/api',appRoutes);

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

/*app.get('/home',function(req,res){  //http://localhost:8000/home
	res.send("helo");
});*/
app.get('*',function(req,res){
	res.sendFile(path.join(__dirname+'/public/app/view/index.html'));
});

 