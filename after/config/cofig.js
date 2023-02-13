const { sequelize } = require("../model");

const dot = require("dotenv").config();
const config = {
  dev: {
    username: "keboard_warrior",
    password: "keboard_warrior",
    database: "keboard_warrior",
    host: "localhost",
    dialect: "mysql",
    timezone: "+09:00",
    operatorsAliases: 0,
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true, // DB에서 가져올 때 시간 설정
    },
    port: 3306,
  },
  prod: {
    username: "keboard_warrior",
    password: process.env.DB_PASSWORD,
    database: "keboard_warrior",
    host: "localhost",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true, // DB에서 가져올 때 시간 설정
    },
    define: {
      timestamps: true,
    },
  },
};

module.exports = config;
