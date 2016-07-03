//create sockets
//assign data-logger as callback on data events
var net = require('net');
var logger = require('./data-logger');

var server = net.createServer(function(socket) {
	// Handle incoming messages from clients.
	socket.on('data', function (data) {
		logger.log(data);
	});
});

server.listen(8080);
