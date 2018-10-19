const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');

router.get('/', (req, res) => {
    sysInfo.networkInterfaces(rs => {
        res.json(rs);
    });
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