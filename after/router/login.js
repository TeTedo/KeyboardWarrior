const express = require("express");
const router_login = express.Router();
const fs = require("fs");
const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

let check_login = false;

router_login.get("/login", (req, res) => {
  res.render("login/login");
});

router_login.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  User.findOne({
    where: { user_id: user_id },
  })
    .then((result) => {
      bcrypt.compare(user_pw, result.dataValues.user_pw, (err, same) => {
        if (same) {
          console.log("로그인 성공");
          check_login = true;
          res.redirect("/");
        } else {
          console.log("비밀번호 오류 입니다.");
        }
      });
    })
    .catch((err) => {
      console.log("존재하지 않는 아이디 입니다.");
    });
});

function makeToken() {}

module.exports = { router_login, check_login };
