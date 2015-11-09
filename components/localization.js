/*
 *  localization strings
 */

var languageOrder = {
    default: 0,
    'zh-cn': 0,
    'en': 1
}

var localization = {
    getString: function (strArray, options) {
        options = options || {};

        var langIndex = languageOrder.default;
        if(options.language && languageOrder[options.language] != null) {
            langIndex = languageOrder[options.language];
        }
    },

    male: ['男', 'Male'],
    female: ['女', 'female']
};

module.exports = localization;