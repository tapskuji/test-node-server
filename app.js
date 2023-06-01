const express = require('express');
const dotenv = require('dotenv');

const app = express();

const databaseConnection = require('./config/database');

// setup config file
dotenv.config({path: './config/config.env'});

const PORT = process.env.PORT;
const APP_ENV = process.env.APP_ENV;

// connect to db
databaseConnection();

// import routes
const jobs = require('./routes/jobs');

// use routes
app.use('/api/v1', jobs);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT} in ${APP_ENV} mode.`);
});