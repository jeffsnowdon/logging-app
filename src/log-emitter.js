var net = require('net');

var clientAlive = false;

//host defaults to localhost
var client = net.createConnection({port:8080}, function(){
  clientAlive = true;
  console.log("Connected to server.");
  setTimeout(writeToServer, 1000);
});


function writeToServer(){
  if (clientAlive){
    var data = {
      'number' : 1000,
      'data' : 'This is the data.'
    }
    client.write(JSON.stringify(data));
    setTimeout(writeToServer, 1000);
  }
}

client.on('close', function(){
  clientAlive = false;
});

client.on('error', function(err){
  console.log("Connection error: "+ err.toString());
})
