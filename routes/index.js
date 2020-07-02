var express = require('express');
var router = express.Router();
let getTestData = require('../middleware/getTestData')

/* GET home page. */
router.get('/', function(req, res, next) {
  getTestData.c
  res.render('index', { title: 'Express' });
});

module.exports = router;
