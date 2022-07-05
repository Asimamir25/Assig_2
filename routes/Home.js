var express = require('express');
var router = express.Router();
var Todo = require('../Model/TodoSchema');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

module.exports = router;
