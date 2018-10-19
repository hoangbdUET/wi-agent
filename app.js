const express = require('express');
const app = express();
const http = require('http').Server(app);
const config = require('config');

const cpuRouter = require('./api/cpu');
const haddiskRouter = require('./api/haddisk');
const memoryRouter = require('./api/memory');
const logRouter = require('./api/log');
const nginxRouter = require('./api/nginx');
const interfaceRouter = require('./api/interface');
const sysInfo = require('systeminformation');

app.get('/', (req, res) => {
    res.json("WI Agent");
});
app.get('/static', (req, res) => {
    sysInfo.getStaticData(rs => {
        res.json(rs);
    });
});
app.get('/dynamic', (req, res) => {
    sysInfo.getDynamicData(rs => {
        res.json(rs);
    })
});
app.use('/cpu', cpuRouter);
app.use('/memory', memoryRouter);
app.use('/harddisk', haddiskRouter);
app.use('/log', logRouter);
app.use('/nginx', nginxRouter);
app.use('/interface', interfaceRouter);

http.listen(config.get("app.port"), (err => {
    if (err) console.log(err);
    console.log("Node agent running on port ", config.get("app.port"));
}));
