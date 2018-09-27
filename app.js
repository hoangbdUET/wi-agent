const express = require('express');
const config = require('config');
const app = express();
const http = require('http');
http.Server(app);

app.listen(config.port, (err => {
    if (err) console.log("App error ", err);
    console.log("App started on port ", config.port);
}));