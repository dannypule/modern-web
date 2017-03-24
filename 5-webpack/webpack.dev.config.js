var path = require('path');

module.exports = {
    entry: [
        `${__dirname}/app/index.js`
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:3344/dist/',
        filename: 'bundle.js'
    }
};