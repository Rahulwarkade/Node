var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  });

router.post('/about', function(req, res) {
  res.render('about');

});
router.get('/contact', function(req, res) {
  res.render('contact');
});
router.get('/output', function(req, res) {
  res.render('output',{name:req.query.username});
  console.log(req.query);
});
module.exports = router;
