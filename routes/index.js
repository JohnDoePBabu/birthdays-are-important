var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Birthdays are important' });
});

router.get('/ping', (req, res) => {
  res.send('pong');
});
module.exports = router;
