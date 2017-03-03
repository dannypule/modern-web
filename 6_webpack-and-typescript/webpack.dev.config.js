var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app', 'index.ts'),
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:3344/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: 'node_modules'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: 'node_modules'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
        // modules: [path.resolve('./app'), 'node_modules']
    },
    devtool: 'inline-source-map'
};