var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    email:      String,
    nickname:   { type: 'string', unique: true },
    first_name: String,
    last_name:  String,
    password:   String,
    role:       String,
    created_at: {
            type:       Date, 
            default:    Date.now()
        }, // létrehozva;
	},

	{collection: 'user'} // specify collection
);

// makes db connection and passport config easier
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);