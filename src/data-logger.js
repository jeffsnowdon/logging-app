var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  log:logData
};
 var dbMain = null;

function logData(incomingData){
  console.log("Received data: "+incomingData);
  insertDocument(dbMain, function(){console.log("Logged data");}, JSON.parse(incomingData));
}

var insertDocument = function(db, callback, log) {
  db.collection('logs').insertOne(log, function(err, result){
    if (err){
      console.log("Error inserting document into logs.");
    }else{
    console.log("Inserted a document into logs.");
  }
    callback();
  });

  //  db.collection('restaurants').insertOne( {
  //     "address" : {
  //        "street" : "2 Avenue",
  //        "zipcode" : "10075",
  //        "building" : "1480",
  //        "coord" : [ -73.9557413, 40.7720266 ]
  //     },
  //     "borough" : "Manhattan",
  //     "cuisine" : "Italian",
  //     "grades" : [
  //        {
  //           "date" : new Date("2014-10-01T00:00:00Z"),
  //           "grade" : "A",
  //           "score" : 11
  //        },
  //        {
  //           "date" : new Date("2014-01-16T00:00:00Z"),
  //           "grade" : "B",
  //           "score" : 17
  //        }
  //     ],
  //     "name" : "Vella",
  //     "restaurant_id" : "41704620"
  //  }, function(err, result) {
  //   assert.equal(err, null);
  //   console.log("Inserted a document into the restaurants collection.");
  //   callback();
  // });
};

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  dbMain = db;
  if (err){
    console.log("Failed to connect to mongodb.");
    return;
  }
  console.log("Connected correctly to server.");
  // db.close();
});
