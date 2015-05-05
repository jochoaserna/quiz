var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', function(req, res, next) {
    res.render('author', {
        nombre   : 'Javier Ochoa Serna',
        foto: '<img src="/images/javierochoa.jpg" width="100px" alt="Javier Ochoa Serna">'
    });
});

module.exports = router;
