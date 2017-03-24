const express = require('express');
const app = express();
const path = require('path');
const webpack = require("webpack"); // require webpack
const webpackDevMiddleware = require("webpack-dev-middleware"); // require webpack-dev-middleware

const environment = process.env.NODE_ENV; // NODE_ENV
const port = process.env.port || 3344; // create port 

if (environment === 'development') { // check if dev environment
    const config = require('./webpack.dev.config'); // require webpack dev config
    const compiler = webpack(config); // create compile

    app.use(webpackDevMiddleware(compiler, { // use webpackDevMiddleware
        publicPath: config.output.publicPath,
        stats: { colors: true }
    }));
}

app.use(express.static(path.join(__dirname))); // serve static js, css files etc

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3344, ()=> {
    console.log(`Example app listening on port ${port}`)
});