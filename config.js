var path = require('path');

var config = {
    db: 'mongodb://127.0.0.1/tutorial',
    // *** use BE ip address when deploy in remote server ***
    // db: 'mongodb://myoffer:My0ffer2015@10.19.162.12:27017/myoffer',
    db_name: 'tutorial',

    website_root: __dirname,
    website_data: path.join(__dirname, 'data'),

    server_port: 8080
};

module.exports = config;