let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  let greeting = 'greeting' in req.query ?
    req.query.greeting :
    'Hello';
  res.render('hello', { greeting: greeting });
});

module.exports = router;