const Job = require('../models/jobs');

// get all jobs => /api/v1/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success: true,
        username: req.username,
        message: "Display all jobs"
    });
};

// create new job => /api/v1/jobs
exports.createJob = async (req, res, next) => {
    console.log(req.body);
    const job = await Job.create(req.body);

    res.status(200).json({
        success: true,
        message: 'created job',
        data: job
    });
};
