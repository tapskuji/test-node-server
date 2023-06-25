const express = require('express');

const router = express.Router();

// import jobs controller
const { getJobs, createJob } = require('../controllers/jobsController');

router.route('/jobs').get(getJobs);
router.route('/jobs').post(createJob);

module.exports = router;