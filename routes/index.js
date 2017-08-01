const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function(req, res) {
  const tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets, showForm: true});
});

router.get('/users/:name', function(req, res) {
  const name = req.params.name;
  const list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: false } );
});

router.get('/tweet/:id', function(req, res) {
  const id = Number.parseInt(req.params.id);
  const list = tweetBank.find( {id: id} );
  res.render('index', {tweets: list, showForm: false});
});

router.post('/tweets', urlEncodedParser, function(req, res) {
  const name = req.body.name;
  const text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
})

module.exports = router;
