var mangoose = require('mangoose');
var schema   = mangoose.Schema;

var user_schema = new Schema({

	username : {type:String,lowercase:true,required:true,unique:true},
	password : {type:String,required:true},
	email    : {type:String,lowercase:true,required:true,unique:true}
	
				});


modules.exports = mongoose.model('User',user_Schema);

