var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('failed to connect to %s, error is ', config.db, err.message);
        process.exit(1);
    }
});

require('./teacher');
require('./enrollment');

exports.teacher = mongoose.model('Teacher');
exports.enrollment = mongoose.model('Enrollment');