const mongoose = require('mongoose');
// const MONGODB_URI = 'mongodb://eldar:Eldar-3030@ds253840.mlab.com:53840/todo-app';
// const uri =  process.env.MONGODB_URI || 'mongodb://localhost/TodoApp';

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};
