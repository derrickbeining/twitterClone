const express = require('express');
const app = express();
const logger = require('volleyball');

app.use(logger);

app.get('/cats/:thing', function(req, res) {
  res.send('You made it to the ' + req.params.thing + ' page!')
});


app.listen(3000, function() {
  console.log('Server is here to serve...');
});
