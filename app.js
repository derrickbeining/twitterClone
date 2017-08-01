const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const logger = require('volleyball');
const routes = require('./routes');
const socketio = require('socket.io')

// server
const server = app.listen(1337, function() {
  console.log('Server is here to serve...');
});

const io = socketio.listen(server);

//config
app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

// routes
app.use(logger);
app.use('/', routes(io));

