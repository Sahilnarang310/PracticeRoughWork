const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path');

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
})

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
})

module.exports = router;
