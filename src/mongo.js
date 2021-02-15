const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://bosmang:semtitulo@bosmang.2heie.mongodb.net/';

// Database Name
const dbName = 'bosmang';
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.strictEqual(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

/////////////////////////
const varrr= {categ: "heavy",loss:0.01};

////////////////////////////////

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('testedecolec');
    // Insert some documents
    collection.insertMany([
      {a : 123}, {a : 456}, {a : 789}
    ], function(err, result) {
        console.log('antes do 1o assert');
      assert.strictEqual(err, null);
        console.log('antes do 2o assert');
      assert.strictEqual(3, result.result.n);
        console.log('antes do 3o assert');
      assert.strictEqual(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('materials');
    // Find some documents
    collection.find(varrr).toArray(function(err, docs) {
      assert.strictEqual(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }