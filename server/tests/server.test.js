require('./../configs/config');
const expect = require('expect');
const request = require('supertest');
const {Todo} = require('./../models/todo');
const {app} = require('./../server');
const {ObjectID} = require('mongodb');
const todos = [
  {_id: new ObjectID(), text: 'First todo'},
  {_id: new ObjectID(), text: 'Second todo', completed: true, completedAt: 333}
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[2].text).toBe(text);
          done();
        }).catch((e) => done(e));
      })
  });

  it('should not create a new todo', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      })
  })
});

describe('GET /todos', () => {
  it('should get todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        })
      })
  });
});

describe('GET /todos/:id', () => {
  it('should return todo By id', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo is not found', (done) => {
    const id = new ObjectID().toString();
    request(app)
      .get(`todos/${id}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 if id is not valid', (done) => {
    request(app)
      .get('todos/dummyId')
      .expect(404)
      .end(done);
  })
});

describe('DELETE /todos/:id', () => {
  const id = todos[0]._id.toString();

  it('should delete todo item', (done) => {
    request(app)
      .delete(`/todos/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.id).toBe(todos[0].id);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.findById(id).then((todo) => {
          expect(todo).toNotExist()
          done();
        }).catch((e) => {
          done(e)
        })
      })
  })
});

describe('PATCH /todos/:id', () => {
  const id = todos[1]._id.toString();
  const text = 'this is the updated text';

  it('should update todo item', (done) => {
    request(app)
      .patch(`/todos/${id}`)
      .send({completed: true, text})
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
      })
      .end(done);
  })
});