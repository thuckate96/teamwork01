var express  = require("express");
var router   = express.Router();
var models   = require("../models/schema");
var mongoose = require("mongoose");

router.route("/")
	.get(function(req, res){
		models.User.find()
		.exec(function(err, users){
			if(err){
				res.json({message: "error to get users"});
			}else{
				models.User.count({}, function(err, counter){
					if(err){
						res.json({message_counter: "error to count"});
					}else{
						res.json({total: counter, data: users});
					}
				})
			}

		});
	})
	.post(function(req, res){
		models.User({
			username: req.body.username, 
			email: req.body.email, 
			address: req.body.address, 
			hobbies: req.body.hobbies
		})
		.save(function(err){
			if(err){res.json({message: "error"})}
			res.json({message: "ok"});
		});
	});
	router.route("/")
	.put(function(req, res){
		 
		models.User.findByIdAndUpdate(req.body.user_id,
			{
			 username : req.body.username, 
			 email    : req.body.email, 
			 address  : req.body.address, 
			 hobbies  : req.body.hobbies,
			}, function(err, user){
				if(err){
					res.send("Error to edit ");
				}else{

					var response = {
						user_id: 	user._id,
						username: 	user.username, 
						email: 		user.email, 
						address: 	user.address, 
						hobbies: 	user.hobbies			
					}
					res.send(JSON.stringify(response));
				}
		});
	})
 
module.exports = router;