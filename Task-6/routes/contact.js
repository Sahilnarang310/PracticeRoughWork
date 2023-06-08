const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const contactusController = require('../controllers/contact');


const router = express.Router();

router.get('/contactus', contactusController.getContactUs);

router.get('/success', contactusController.success);

module.exports = router;

