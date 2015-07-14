var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String
	},

	{collection: 'user'} // specify collection
);

// makes db connection and passport config easier
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);