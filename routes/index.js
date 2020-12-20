var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET placerecomment */
router.get('/placerecomment', function(req, res, next) {
  var local = req.query['search-categories'];
 


  res.render('placerecomment', { title: 'Express', place: local });
});

/* GET exchang */
router.get('/exchang', function(req, res, next) {
  
  res.render('exchang', { title: 'Express' });
});

/* GET outputexchange */
router.get('/outputexchang', function(req, res, next) {
  var thb
  var rate = req.query["rate"]
  if(rate == "US"){


  }
  res.render('exchang', { title: 'Express' });
});

/* GET outputexchange */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET Login */
router.post('/login', function(req, res, next) {
  var {username, password} = req.body;
  var checkResult = false;

    if(username === "bow" && password === "123456") {
      checkResult = true;
    }  

    return res.render('login', { title: 'Express' , result: checkResult});
});


module.exports = router;

