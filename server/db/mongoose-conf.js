const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://eldar:Eldar-3030@ds253840.mlab.com:53840/todo-app';
const local_URI = 'mongodb://localhost/TodoApp';

mongoose.connect(MONGODB_URI);

module.exports = {
    mongoose
};
