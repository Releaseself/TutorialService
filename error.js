/*
 * all error content, support multi-language
 */
var lodash = require('lodash');

var defaultLanguage = 'en';

var error = {
    getError: function (err, options) {
        if (lodash.isEmpty(err)) {
            return new Error();
        }

        options = options || {};

        var lang = options.language || defaultLanguage;
        var message = lodash.template(err.message[lang], err.data);
        return new Error(message, err.id);
    },

    no_parameter: function (param) {
        return {
            id: 10001,
            message: {
                'en': 'No parameter: <%= param %>',
                'zh-cn': '缺少参数：<%= param %>'
            },
            data: {
                param: param || ''
            }
        };
    }
};

module.exports = error;