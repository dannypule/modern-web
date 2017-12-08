var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app', 'index.ts'),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
        // modules: [path.resolve('./app'), 'node_modules']
    },
    devtool: 'inline-source-map'
};