var express = require('express');
var router = express.Router();

var fs = require('node:fs');
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

  fs.readFile("./uploads/file.txt",'utf8',function(err,data)
  {
    if(err) throw err;
    // else
      // console.log(data);
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
  // console.log(req.query);
});

router.get('/createFile',function(req,res)
{
  fs.writeFile(`./uploads/${req.query.fileName}`,"",function(err)
  {
    if(err) throw err;
    else
      res.redirect('/');
  })
});
router.get("/createFolder",function(req,res)
{
  fs.mkdir(`./uploads/${req.query.folderName}`,function(err)
  {
    if(err) throw err;
    else{
      console.log(req.query.folderName);
      res.redirect('/');
    }
  })
});

router.get("/username/:name",function(req,res)
{
  // res.send("rahul's account.");
  res.send(`${req.params.name}'s account.`)
})

module.exports = router;
