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

    // db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5b1a34869167d16394fc2c86')},{
    //     $set: {completed: true}
    //     }, {returnOriginal: false}).then((result) => {console.log(result)});
    // client.close();

    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5b1a04f5b87b3926bc2c03dc')},{
        $inc: {age: 1}
    }, {returnOriginal: false}).then((result) => {console.log(result)});
    client.close();
});