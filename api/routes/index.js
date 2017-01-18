var express = require('express');
var router = express.Router();
var UrlController = require('../controllers/UrlController');

router.get('/:shorted', function(req, res) {//handling the shorted links
  UrlController.goTo(req,res);
});
router.post('/create',function(req, res){//creating the shorted links or returning an existing
  UrlController.createUrl(req,res);
});

module.exports = router;
