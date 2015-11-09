var Teacher = require('../models').Teacher;
var lodash = require('lodash');
var Q = require('q');

var teacher = {
    Create: function (data, callback) {
        if (!Array.isArray(data)) {
            data = [data];
        }

        var deferred = Q.defer();
        Teacher.create(data, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(lodash.map(data, function (item) {
                    return item.toObject();
                }))
            }
        });

        return deferred.promise.nodeify(callback);
    },

    Find: function (condition, callback) {
        var deferred = Q.defer();
        Teacher.find(condition, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(lodash.map(data, function (item) {
                    return item.toObject();
                }))
            }
        });

        return deferred.promise.nodeify(callback);
    }
};

module.exports = teacher;