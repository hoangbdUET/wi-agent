const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');

router.get('/', (req, res) => {
    sysInfo.memLayout().then(rs => {
        res.json(rs);
    });
});

router.get('/usage', (req, res) => {
    sysInfo.mem().then(rs => {
        res.json(rs);
    })
});

module.exports = router;