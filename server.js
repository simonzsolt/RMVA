// ====================MAIN DEPENDENCIESS====================

var express = require('express'); // server dep
    app = express(), // initializing app

    path = require('path'),
    http = require('http'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    passportLocalMongoose = require('passport-local-mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    
    bodyParser = require('body-parser'),

    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    flash = require('connect-flash'),

    MongoStore = require('connect-mongo')(session),

    zeroFill = require('zero-fill'),

    validator = require('validator'),

    config = require('config');

// ====================LOADING CONFIG VARS====================

if (config.has('MONGOLAB_URI')) {

    var MONGOLAB_URI = config.get('MONGOLAB_URI');
    console.log('env var test: ' + MONGOLAB_URI);
}
else {
    console.log('env var test: no local config vars');
}; 

//  mongoose
var mongoose = require('mongoose');
var models = require('./public/models/poemModels'); 


// ====================SERVER INIT====================

// -------------------PORT AND IP-------------------

// for openshift
var port = (process.env.OPENSHIFT_NODEJS_PORT || 8080);

// for local

// var port = (process.env.OPENSHIFT_NODEJS_PORT || 3000);

// var port = (process.env.OPENSHIFT_NODEJS_PORT || 3001);

var ip = (process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

// -------------------DB CONNECTION-------------------

// MONGOLAB

// WITH ENVIROMENT VAR SET FOR: HEROKU, OPENSHIFT

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL, function(err) {
    if (err) {
        console.log('DB connection error:' + err);
    }
    else {return}
});


// -------------------SERVER LISTENING-------------------

var server = app.listen(port, ip, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
}); // debug for port and ip binding

var routes = require('./routes/index');
var auth = require('./routes/auth');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ====================MIDDLEWARE====================

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev')); // morgan logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// for reaching public directory without stating 'public/'
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(session({
    secret: 'itsbettertoburnoutthantofadeaway',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({

        // for dev
        mongooseConnection: mongoose.connection,

        // for production
        // mongooseConnection: process.env.MONGOLAB_URI,

        // url: 'mongodb://localhost/vers'

        url: process.env.MONGOLAB_URI
    })
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// add Schema
var Account = require('./public/models/usersModels'); 
// use localStrategy and authenticate function
passport.use(new localStrategy(Account.authenticate()));
// passport.use(Account.createStrategy());

// serializing based on Shcema
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// routing, called with: 'router.' 
// Requires: 
//           *  var express = require('express'); 
//           *  var router = express.Router();
app.use('/', routes); 
app.use('/', auth); 


// ====================EXPORTING APP====================

// making app available for other files
// that require express
module.exports = app; 
