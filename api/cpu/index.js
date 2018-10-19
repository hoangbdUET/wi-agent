const express = require('express');
const router = express.Router();
const os = require('os');
const sysInfo = require('systeminformation');

router.get('/', (req, res) => {
    res.json(os.cpus());
});

router.get('/usage', (req, res) => {
    sysInfo.currentLoad(rs => {
        res.json(rs);
    });
});

module.exports = router;