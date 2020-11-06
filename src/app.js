const express = require('express')
const bodyParser = require('body-parser');
const { uuid } = require('uuidv4');

const {
  success,
  notFound,
  error
} = require('./responses');

const {
  getUserById,
  addUser
} = require ('./model');

const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/id', (req, res) => {
  success(res, {
    id: uuid()
  });
});

app.get('/user/:id', async ({params}, res) => {
  const { id } = params;
  let user;
  try {
    user = await getUserById(id);
  } catch(e) {
    if (e instanceof ReferenceError) {
      return notFound(res, `Could not find User for id ${id}`);
    }
    return error(res, 'Internal Error');
  }
  success(res, user);
});

app.post('/user', async ({body}, res) => {
  let user;
  try {
    user = await addUser(body);
  } catch(e) {
    return error(res, 'Internal Error');
  }
  success(res, user);
});

module.exports = app;