var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("hbs", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne({burger_name: req.body.burger_name, devoured: req.body.devoured}
  	, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burger.delete(condition, function() {
    res.redirect("/");
  });
})

// Export routes for server.js to use.
module.exports = router;