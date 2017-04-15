var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String, 
	email: String, 
	address: String,
	hobbies: String,
	created_at: Date, 
	updated_at: Date
});

userSchema.pre('save', function(next){
	var currentDate = new Date().toISOString();
	this.updated_at = currentDate;
	if(!this.created_at) 
		this.created_at = currentDate;
	next(); 
});

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User 
}