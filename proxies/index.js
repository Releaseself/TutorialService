var mongoose = require('mongoose');
require('../models');

// create view model from model
exports.createViewModel = function (model, fields, callback) {
    if (!mongoose.models[model]) {
        return callback(new Error('cannot found model ' + model));
    }

    var viewModel = {};

    for(var key in mongoose.models[model].schema.paths) {
    }
}