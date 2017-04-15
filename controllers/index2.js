var express  = require("express");
var router   = express.Router();
var models   = require("../models/schema");
var mongoose = require("mongoose");
var request  = require("request");

 router.route("/")
 .get(function(req, res){
 	res.render("index");
 })
router.route("/home")
.get(function(req, res){
	var options = {

		url: "http://localhost:5000/api/user",
		method: "get"
	};

	request(options, function(err, response, user_data){
		if(!err && res.statusCode == 200){
			res.render('display',{
					user: JSON.parse(user_data).data
			})
		}
	});
})
module.exports = router;
