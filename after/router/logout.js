const express = require("express");
const router = express.Router();
const { Token } = require("../model");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();
const getUserId = require("../functions/getUserId");
router.get("/logout", (req, res) => {
  const user_id = getUserId(req, res);
  console.log(user_id, "는 로그아웃 됨");
  res.redirect("/");
});

module.exports = router;
