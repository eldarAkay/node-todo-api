const {MongoClient, ObjectID} = require('mongodb');
const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) throw err;
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do 2',
        completed: false
    },(err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        client.close();
    });

    db.collection('Users').insertOne({
        name: 'eldar',
        age: 27,
        location: 'USA'
    }, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result.ops, undefined, 2));
        client.close;
    })

});