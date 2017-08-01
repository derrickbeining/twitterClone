const express = require('express');
const router = express.Router()

const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets});
});

module.exports = router;
