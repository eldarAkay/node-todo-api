const {mongoose} = require('./../server/db/mongoose-conf');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5b1aad02310dd06e34689b07';

const userId = '5b1a6282021b2e5ec9534e47';

User.findById(userId).then((docs) => {console.log(docs)}, (err) => {console.log(err)});


// Todo.find({_id:id},function (err, docs) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(docs);
// });
//
// Todo.find({_id: id}).then((docs) => {console.log(docs)}, (err) => console.log(err));
//
// Todo.find({_id: id}).then((docs) => {console.log(docs)}).catch((err) => console.log(err));


// Todo.findOne({_id: id}).then((docs) => {console.log(docs)}).catch((err) => {console.log(err)});
//
// Todo.findOne({_id: id}, function (err, docs) {
//    if (err) {
//        return;
//    }
//    console.log(docs);
// });







