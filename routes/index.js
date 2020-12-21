var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET placerecomment */
router.get("/placerecomment", function (req, res, next) {
  var local = req.query["search-categories"];

  res.render("placerecomment", {
    title: "Express",
    province: local
  });
});

router.get("/place", function(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("admin");
  dbo
      .collection(req.query.province.toLowerCase())
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;

        res.send({place: result});

        db.close();
      });
  });
})

/* GET exchang */
router.get("/exchang", function (req, res, next) {
  res.render("exchang", { title: "Express" });
});

/* GET outputexchange */
router.get("/outputexchang", function (req, res, next) {
  var thb;
  var rate = req.query["rate"];
  if (rate == "US") {
  }
  res.render("exchang", { title: "Express" });
});

/* GET outputexchange */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

/* GET Login */
router.post("/login", function (req, res, next) {
  var { username, password } = req.body;
  var checkResult = false;

  if (username === "bow" && password === "123456") {
    checkResult = true;
  }

  return res.render("login", { title: "Express", result: checkResult });
});

/* GET Profile */
router.get("/Profile", function (req, res, next) {
  //res.render('Profile', { title: 'Express' });
  return res.render("Profile", { title: "Profile" });
});

module.exports = router;
