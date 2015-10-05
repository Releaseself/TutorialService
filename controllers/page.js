var teacher = require('./teacher');

exports.home = function (req, res, next) {
    return res.render('index');
};

exports.newTeacher = function (req, res, next) {
    var model = teacher.getViewModel('create');
    return res.render('teacher', {
        model: {
            name: {
                displayName:'名称',
                placeholder: '请输入名称',
            },
            introduction: {
                displayName: '简介',
                placeholder: '请输入描述信息',
            }
        },
        acceptButton: {
            value: '确定'
        },
        submit : 'newTeacher()'
    });
};

exports.findTeacher = function (req, res, next) {
    return res.render('teachers');
};