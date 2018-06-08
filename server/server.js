const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose-conf');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const {text} = req.body;
    const todo = new Todo({text});
    todo.save().then((doc) => {res.send(doc)}, (e) => {res.status(400).send(e)})
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
       res.send(todos);
   }, (err) => {
       res.status(400).send(err);
   })
});

app.listen(3000, () => {
    console.log('Started App on Port 3000');
});

module.exports = {
    app
};