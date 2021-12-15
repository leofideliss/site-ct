var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Curtume Touro | Presidente Prudente' });
});

router.get('/eng', function(req, res, next) {
    res.render('index_eng', { title: 'Curtume Touro | Presidente Prudente' });
});




module.exports = router;