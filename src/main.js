//create sockets
//assign data-logger as callback on data events
var net = require('net');
var logger = require('./data-logger');
var express = require('express');
var app = express();
var path = require('path');

var logs = [];

var server = net.createServer(function(socket) {
	// Handle incoming messages from clients.
	socket.on('data', function (data) {
		logger.log(data);
		// logs.push(data);
	});
});
server.listen(8080);

app.get('/logs', function(req, res){
	var numToFind = req.query.number;
	console.log("Get all logs for number: "+numToFind);
	var testResult = {
		entries : [
			{
				number : 5,
				data : "itsa fiva"
			},
			{
				number : 7,
				data : "hi it's 7."
			}
		]
	}
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	// res.type('jsonp');
	//res.send(testResult);
	res.send(testResult);
});
app.get('/', function(req, res){
	console.log("responding with msg");
	res.type('html');
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.options('/logs', function(req, res) {
    // At this point, the `allowCrossDomain()` middleware will already have
    // taken care of the CORS stuff, so just return OK.
    res.send(200);
});

app.use(express.static('.'));
app.listen(8000, function(){
	console.log('Express initialized');
});
