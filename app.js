const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const funcionarios = require ('./models/funcionarios')


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


app.post('/posts', async (req, res) => {
  try {
    const { tags, ...data } = req.body;
    const post = await funcionarios.create(data);

    if (tags && tags.length > 0) {
      post.setCursos(tags);
    }

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ err });
  }
});


module.exports = app;