var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Jordans Family.' });
});

/* GET jordan page. */
router.get('/jordan', function(req, res, next) {
  res.render('jordan', { title: 'Jordan', message: 'Jordan is a computer programming student at Georgian College.' });
});

/* GET gord page. */
router.get('/gord', function(req, res, next) {
  res.render('gord', { title: 'Gord', message: 'Gord works at a Peek Freans cookie factory in Toronto.' });
});

/* GET cindy page. */
router.get('/cindy', function(req, res, next) {
  res.render('cindy', { title: 'Cindy', message: 'Cindy used to babysit children, but has held a position in retail for over 20 years.' });
});

/* GET tyler page. */
router.get('/tyler', function(req, res, next) {
  res.render('tyler', { title: 'Tyler', message: 'Tyler is an electrician, he did some studies at Georgian College.' });
});

/* GET brandon page. */
router.get('/brandon', function(req, res, next) {
  res.render('brandon', { title: 'Brandon', message: 'Brandon went to Georgian College for adventure and tourism. He currently works at Tree Top Trekking' });
});

module.exports = router;
