var express = require('express');
var router = express.Router();
var controller = require('./controllers');
var page = require('./page');

// views
router.get('/', page.home.index);
router.get('/teacher', page.teacher.create);
router.get('/teacher/:id', page.teacher.show);
router.get('/teachers', page.teacher.find);

// api
router.post('/api/teacher', controller.teacher.api_create);

module.exports = router;