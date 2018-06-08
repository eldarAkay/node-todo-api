const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) throw err;
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text:'go to work'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });
    // client.close();
    //
    // db.collection('Todos').deleteOne({text:'go to work'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });
    // client.close();

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log(err);
    });
    client.close();

});