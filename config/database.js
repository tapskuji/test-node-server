const mongoose = require('mongoose');

const databaseConnection = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    }).then(con => {
        console.log(`Connected to Database on ${con.connection.host}`);
    });
};

module.exports = databaseConnection;
