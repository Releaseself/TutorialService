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

exports.Teacher = mongoose.model('Teacher');
exports.Enrollment = mongoose.model('Enrollment');