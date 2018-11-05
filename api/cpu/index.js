const express = require('express');
const router = express.Router();
const os = require('os');
const sysInfo = require('systeminformation');

router.get('/', (req, res) => {
    sysInfo.cpu().then(summary => {
        res.json({summary, cpus: os.cpus()});
    })
});

router.get('/usage', (req, res) => {
    sysInfo.currentLoad(rs => {
        res.json(rs);
    });
});

module.exports = router;