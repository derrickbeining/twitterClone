const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const logger = require('volleyball');

const locals = {
  title: 'Magnificent Title',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
};

//config
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output) {
  if (err) { throw err }
  console.log(output);
});

app.set('view engine', 'html')
app.engine('html', require('nunjucks').render)

nunjucks.configure('/views',{noCache: true});


// server

app.use(logger);

app.get('/', function(req, res) {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});


app.listen(3000, function() {
  console.log('Server is here to serve...');
});
