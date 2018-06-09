const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose-conf');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');
const {ObjectID} = require('mongodb');
const {_} = require('lodash');

const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
    const {id} = req.params;

    if(!ObjectID.isValid(id)) {
       return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.patch('/todos/:id', (req, res) => {
   const {id} = req.params;

   const body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {res.status(404).send(e)})
});

app.delete('/todos/:id', (req, res) => {
   const {id} = req.params;

   if (!ObjectID.isValid(id)) {
       return res.status(404).send();
   }

   Todo.findByIdAndRemove(id).then((todo) => {
       if (!todo) {
           return res.status(404).send();
       }
       res.send({todo});
   }).catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
    console.log('App is started...');
});

module.exports = {
    app
};