var path = require('path');
var baseConfig = require('../webpack.config');
var webpack = require('webpack');

module.exports = Object.assign({}, baseConfig, {
    entry: [
        // 'webpack-hot-middleware/client',
        `webpack-hot-middleware/client?path=http://localhost:3344/__webpack_hmr&reload=true`,
        path.resolve(__dirname, '..', 'app', 'index.ts'),
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:3344/dist/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});

if (module.hot) {
  module.hot.accept();
}