var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (request, response) => {
  response.send("This is request: " + request);
  //response.send(`Hello ${request.userName}`);
});

module.exports = router;
