// let mongoDB_URL = "//!URL DE MONGODB";

let mongoose = require ("mongoose");
require ("dotenv").config();

console.log(process.env.mongoDB_URL);

let dbConfig = async () => {
    await mongoose.connect(process.env.mongoDB_URL);
}

module.exports = dbConfig;