var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/arquitectura_web", function (err, db) {
    
    db.collection('projects', function (err, collection) { 

        db.collection('projects').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});