var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('Eres genial');
});

module.exports = router;
//respond with a resource