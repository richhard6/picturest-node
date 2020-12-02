const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors');
const pinsRouter = require('./resources/pins/pins.router');
const usersRouter = require('./resources/users/users.router');
const boardsRouter = require('./resources/boards/boards.router');

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/pins', pinsRouter); //aqui se llama al pinsRouter en la ruta que digamos.  habria que crear los otros para boards y users
app.use('/api/users', usersRouter);
app.use('/api/boards', boardsRouter);

const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  start,
  app,
};
