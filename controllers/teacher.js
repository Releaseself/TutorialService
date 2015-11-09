var viewModels = require('../view_models/teacher');
var proxy = require('../proxies/teacher');
var local = require('../components/localization');

var teacher = {
    create: function () {
        return viewModels.getModel('create');
    },

    find: function () {
        var viewModel = viewModels.getModel('find');
        return proxy.Find({})
            .then(function (data) {
                data.forEach(function (item) {
                    viewModel.model.push(item);
                });

                return viewModel;
            });
    },

    findById: function (id) {
        var viewModel = viewModels.getModel('show');
        return proxy.Find({'_id': id})
            .then(function (data) {
                if (data.length > 0) {
                    viewModel.model = data[0];
                    viewModel.model.gender = (viewModel.model.gender === 0 ? local.getString(local.male) : local.getString(local.female));
                }

                return viewModel;
            });
    },

    api_create: function (req, res, next) {
        var data = req.body.data;

        console.log(JSON.stringify(data));

        proxy.Create(data)
            .then(function (data) {
                return res.json(data);
            }, next);
    }
};

module.exports = teacher;
