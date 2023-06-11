const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        trim: true,
        maxLength: [100, 'Job title cannot exceed 100 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please enter a job description'],
        trim: true,
        maxLength: [1000, 'Job description cannot exceed 1000 characters']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    company: {
        type: String,
        required: [true, 'Please add a company name'],
    },
    industry: {
        type: [String], // can select multiple
        required: true,
        enum: {
            values: [
                'Bussiness',
                'Information Technology',
                'Banking',
                'Education',
                'Telecoms',
                'Other'
            ],
            message: 'Please select correct option for industry'
        },
    },
    jobType: {
        type: String,
        required: true,
        enum: {
            values: [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message: 'Please select correct option for job type'
        },
    },
    minEducation: {
        type: String,
        required: true,
        enum: {
            values: [
                'Bachelors',
                'Masters',
                'PhD'
            ],
            message: 'Please select correct option for min Education'
        },
    },
    position: {
        type: Number,
        default: 1,
    },
    experience: {
        type: String,
        required: true,
        enum: {
            values: [
                'No Experience',
                '1+ years',
                '2+ years',
                '3+ years',
                '4+ years',
                '5+ years'
            ],
            message: 'Please select correct option for min Education'
        },
    },
    salary: {
        type: Number,
        required: [true, 'Please enter expected salary for this job']
    },
    postingDate : {
        type : Date,
        default : Date.now
    },
    lastDate : {
        type : Date,
        default : new Date().setDate(new Date().getDate() + 7)
    },
    applicantsApplied : {
        type : [Object],
        select : false
    }
});

module.exports = mongoose.model('Job', jobSchema);
