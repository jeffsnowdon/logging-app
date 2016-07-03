//create sockets
//assign data-logger as callback on data events
var net = require('net');
var logger = require('./data-logger');
var express = require('express');
var app = express();

var logs = [];

var server = net.createServer(function(socket) {
	// Handle incoming messages from clients.
	socket.on('data', function (data) {
		logger.log(data);
		logs.push(data);
	});
});
server.listen(8080);

app.get('/logs', function(req, res){
	console.log("responding with logs");
	res.send(logs);
});
app.get('/', function(req, res){
	console.log("responding with msg");
	res.send("Try /logs!");
});
app.listen(8000, function(){
	console.log('Express initialized');
});
