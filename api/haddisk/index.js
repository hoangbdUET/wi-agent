const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');

router.get('/', (req, res) => {
    sysInfo.diskLayout(rs => {
        res.json(rs);
    })
});

router.get('/usage', (req, res) => {
    sysInfo.fsSize(rs => {
        res.json(rs);
    });
});

router.get('/io', (req, res) => {
    sysInfo.disksIO(rs => {
        res.json(rs);
    }).catch(err => {
        console.log("Disk IO Error ", err);
    })
});

router.get('/block', (req, res) => {
    sysInfo.blockDevices(rs => {
        res.json(rs);
    });
});

module.exports = router;