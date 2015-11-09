var controller = require('./controllers');
var error = require('./error');
var lodash = require('lodash');

var page = {
    home: {},
    teacher: {},
    student: {}
};

///
/// home pages
///
page.home.index = function (req, res, next) {
    return res.render('index');
};

///
/// teacher pages
///
page.teacher.show = function (req, res, next) {
    var id = req.params.id;

    if (lodash.isEmpty(id)) {
        return next(error.getError(error.no_parameter('id')));
    }

    controller.teacher.findById(id)
        .then(function (data) {
            return res.render('teacher_show', data)
        }, next);
};

page.teacher.create = function (req, res, next) {
    return res.render('teacher', controller.teacher.create());
};

page.teacher.find = function (req, res, next) {
    controller.teacher.find()
        .then(function (data) {
            return res.render('teachers', data);
        }, next);
};

///
/// student pages
///

module.exports = page;