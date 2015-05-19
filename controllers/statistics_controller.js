var models = require('../models/models.js');

/* GET /quizes/statistics */
exports.statistics = function(req, res) {
    models.Quiz.count().then(function(nQuizes) {
        models.Comment.count().then(function(nComments) {
            models.Quiz.findAll( {
                include: [{
                    model: models.Comment
                }]
            }).then(function(quizes) {
                var preguntasComentadas = 0;
                for(i in quizes) {
                    if(quizes[i].Comments.length)
                        preguntasComentadas++;
                }
                res.render('quizes/statistics', {
                    quizes         : nQuizes,
                    comments       : nComments,
                    preguntasComentadas: preguntasComentadas,
                    errors: []
                });
            });
        });
    });
}; 