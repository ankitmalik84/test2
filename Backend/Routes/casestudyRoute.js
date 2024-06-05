const express = require('express');

const { sendCaseStudy } = require('../controller/casestudy');


const router = express.Router();

router.post('/casestudy', sendCaseStudy )

module.exports = router;
