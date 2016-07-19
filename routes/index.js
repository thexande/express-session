var express = require('express');
var router = express.Router();
var session = require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {
  str = "you have visited the page "
  var sess = req.session
  sess.hit ? sess.hit += 1 : sess.hit = 1
  sess.hit === 1 ? str = str+ sess.hit + "time" : str = str + sess.hit + " times"
  res.send(str)
})
router.get('/clear', (req, res, next) => {
  req.session.destroy((err) => {
    console.log("session destroyed");
  })
  res.redirect('/')
})

module.exports = router;
