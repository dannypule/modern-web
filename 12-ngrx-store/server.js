// use this server by running:
// ng build
// node server.js


const express = require('express');
const app = express();
const path = require('path');

const environment = process.env.NODE_ENV; // NODE_ENV - not used in this file but leaving this here in case needed

const port = process.env.PORT || 3800; // create port 

app.use(express.static(path.join(__dirname, 'dist'))); // serve static js, css files etc

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});