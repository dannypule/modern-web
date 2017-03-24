var path = require('path');
var baseConfig = require('../webpack.config');

module.exports = Object.assign({}, baseConfig, {
    output: {
        path: '/',
        publicPath: 'http://localhost:3344/dist/',
        filename: 'bundle.js'
    }
});