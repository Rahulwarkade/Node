var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',{name : req.query.name});
  
});

router.post('/about', function(req, res) {
  res.render('about');

});
router.get('/contact', function(req, res) {
  res.render('contact');
});
// router.get('/output', function(req, res) {
//   // console.log(req.query.name);
// });
module.exports = router;
