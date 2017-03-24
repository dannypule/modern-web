var path = require('path');
var baseConfig = require('../webpack.config');

module.exports = Object.assign({}, baseConfig, {
    entry: [
        path.resolve(__dirname, '..', 'app', 'index.ts'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    }
});