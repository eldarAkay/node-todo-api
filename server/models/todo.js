const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
  Todo
};