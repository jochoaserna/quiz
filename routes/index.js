var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);

router.get('/author', function(req, res, next) {
    res.render('author', {
        nombre   : 'Javier Ochoa Serna',
        foto: '<img src="/images/javierochoa.jpg" width="100px" alt="Mikel Goig">'
    });
});

module.exports = router;
