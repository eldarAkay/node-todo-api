const mongoose = require('mongoose');
const uri =  process.env.MONGODB_URI || 'mongodb://localhost/TodoApp';

mongoose.connect(uri);

module.exports = {
    mongoose
};
