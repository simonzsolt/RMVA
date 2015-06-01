// ====================MAIN DEPENDENCIESS====================

var express = require('express'); // server dep
var app = express(); // initializing app

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// ====================SERVER INIT====================

// for openshift
// var port = (process.env.OPENSHIFT_NODEJS_PORT || 8080);

// for local
var port = (process.env.OPENSHIFT_NODEJS_PORT || 3000);
var ip = (process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');


var server = app.listen(port, ip, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


var routes = require('./routes/index');

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

// routing, called with: 'router.' 
// Requires: 
//           *  var express = require('express'); 
//           *  var router = express.Router();
app.use('/', routes); 


// ====================EXPORTING APP====================

// making app available for other files
// that require express
module.exports = app; 
