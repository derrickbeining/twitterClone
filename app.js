const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const logger = require('volleyball');
const routes = require('./routes');

//config
app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

// server

app.use(logger);

app.use('/', routes);

app.listen(3000, function() {
  console.log('Server is here to serve...');
});
