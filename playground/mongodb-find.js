const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) throw err;
    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: true}).count().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    });
    client.close();
});