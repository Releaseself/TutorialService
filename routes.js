var express = require('express');
var router = express.Router();
var controller = require('./controllers');

router.get('/', controller.page.home);
router.get('/teacher', controller.page.newTeacher);
router.get('/teachers', controller.page.findTeacher);

module.exports = router;