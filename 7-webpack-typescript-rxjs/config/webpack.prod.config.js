var path = require('path');
var baseConfig = require('../webpack.config');

module.exports = Object.assign({}, baseConfig, {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    }
});