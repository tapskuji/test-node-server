const express = require('express');

const router = express.Router();

// import jobs controller
const { getJobs } = require('../controllers/jobsController');

router.route('/jobs').get(getJobs);

module.exports = router; 