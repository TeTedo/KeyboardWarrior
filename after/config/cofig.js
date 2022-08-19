const dot = require("dotenv").config();
const config = {
    dev: {
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "keboard_warrior",
        host: "localhost",
        dialect: "mysql",
    },
};
module.exports = config;
