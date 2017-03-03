var express = require('express');
var app = express();
var path = require('path');
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");

var config = require('./webpack.dev.config');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(express.static(path.join(__dirname)));

app.get('*', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.listen(3344, function () {
  console.log('Example app listening on port 3344!')
});