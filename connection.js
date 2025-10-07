const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
    .connect( MONGODB_URL)
    .then(() => {
        console.log("Database Connected successfully");
    })
    .catch((error) => {
        console.log("failed to connect to database with error", error);
    });

    module.exports = mongoose;