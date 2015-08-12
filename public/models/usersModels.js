var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    email:      { type: 'String', required: true},
    nickname:   { type: 'string', unique: true, required: true },
    first_name: { type: 'String', required: true},
    last_name:  { type: 'String', required: true},
    password:   { type: 'String', required: true},
    role:       String,
    created_at: {
            type:       Date, 
            default:    Date.now()
        }, // létrehozva;
	},

	{collection: 'user'} // specify collection
);


// var options = ;
// makes db connection and passport config easier
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);