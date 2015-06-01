var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

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