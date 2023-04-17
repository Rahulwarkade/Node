var express = require('express');
var router = express.Router();

var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res) {
  var arr = [];
  fs.readdir("./uploads",{withFileTypes: true},function(err, files)
  {
      files.forEach(function(elm)
      {
        arr.push({name : elm.name,isFolder : elm.isDirectory()});
      })
       res.render('index',{files : arr});
  })
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

router.get('/createFile',function(req,res)
{
  fs.writeFile(`./uploads/${req.query.fileName}`,"",function(err)
  {
    if(err) throw err;
    else{
      res.redirect('/');
    }
  })
})
router.get('/createFolder',function(req,res)
{
  fs.writedir(`./uploads/${req.query.folderName}`,"",function(err)
  {
    if(err) throw err;
    else{
      res.redirect('/');
    }
  })
})
module.exports = router;
