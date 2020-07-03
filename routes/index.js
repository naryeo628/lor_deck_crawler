var express = require('express');
var router = express.Router();
let getTestData = require('../middleware/getTestData2')

/* GET home page. */
router.get('/', function (req, res, next) {
  getTestData.getCodeList().then(data => {
    res.render('index', { title: 'Express', codeList: data });
  });
});

module.exports = router;
