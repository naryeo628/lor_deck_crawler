var express = require('express');
var router = express.Router();
let codeListService = require('../service/codeListService')

/* GET home page. */
router.get('/', function (req, res, next) {
  codeListService.getCodeList().then(data => {
    res.render('index', { title: 'LOR', codeList: data });
  });
});


router.get('/markdown', function (req, res, next) {
  codeListService.getCodeList().then(data => {
    res.render('markdown', { title: 'LOR', codeList: data });
  });
});


module.exports = router;
