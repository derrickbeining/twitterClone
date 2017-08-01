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

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output) {
  if (err) { throw err }
  console.log(output);
});

app.engine('html', require('nunjucks').render)

app.set('view engine', 'html')

nunjucks.configure('/views')

app.use(logger);

app.get('/cats/:thing', function(req, res) {
  res.send('You made it to the ' + req.params.thing + ' page!')
});


app.listen(3000, function() {
  console.log('Server is here to serve...');
});
