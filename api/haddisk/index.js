const express = require('express');
const router = express.Router();
const sysInfo = require('systeminformation');

router.get('/', async (req, res) => {
    let summary = await sysInfo.diskLayout();
    let block = await sysInfo.blockDevices();
    let fs = await sysInfo.fsSize();
    res.json({
        summary,
        block,
        fs
    });
});

router.get('/io', (req, res) => {
    sysInfo.disksIO(rs => {
        res.json(rs);
    }).catch(err => {
        console.log("Disk IO Error ", err);
    })
});

module.exports = router;