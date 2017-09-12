
var User       = require('../models/user');

module.exports = function(router){
	router.post('/user',function(req,res){  //http://localhost:8000/user
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
	return router;
} 