const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');
const os = require('os');
router.get('/', (req, res) => {
    sysInfo.memLayout().then(rs => {
        res.json({
            summary: {
                total: os.totalmem()
            },
            memories: rs
        });
    });
});

router.get('/usage', (req, res) => {
    sysInfo.mem().then(rs => {
        res.json(rs);
    })
});

module.exports = router;