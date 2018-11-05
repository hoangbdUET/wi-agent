const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');

router.get('/', async (req, res) => {
    let summary = await sysInfo.networkInterfaces();
    let stats = await sysInfo.networkStats();
    let connections = await sysInfo.networkConnections();
    res.send({
        summary,
        stats,
        connections
    })
});

router.get('/stats', (req, res) => {
    sysInfo.networkStats(rs => {
        res.json(rs);
    });
});

router.get('/connections', (req, res) => {
    sysInfo.networkConnections(rs => {
        res.send(rs);
    });
});
module.exports = router;