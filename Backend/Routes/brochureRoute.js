const express = require('express');
const {sendBrochure} = require('../controller/broucher')


const router = express.Router();

router.post('/brochure',  sendBrochure )

module.exports = router;
