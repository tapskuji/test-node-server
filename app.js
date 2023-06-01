const express = require('express');
const dotenv = require('dotenv');

const app = express();

// setup config file
dotenv.config({path: './config/config.env'});

const PORT = process.env.PORT;
const APP_ENV = process.env.APP_ENV;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT} in ${APP_ENV} mode.`);
});