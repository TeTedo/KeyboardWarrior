const express = require("express");
const router = express.Router();
const fs = require("fs");
const User = require("../model/users");
const Token = require("../model/tokens");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
const session = require("express-session");
dot.config();

router.get("/login", (req, res) => {
  res.render("login/login");
});

router.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  User.findOne({
    where: { user_id: user_id },
  })
    .then((result) => {
      const data = result.dataValues;
      bcrypt.compare(user_pw, data.user_pw, (err, same) => {
        if (same) {
          //로그인 성공
          // access token
          const access_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.ACCSESS_TOKEN,
            {
              expiresIn: "10m",
            }
          );

          // refresh token
          const refresh_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.REFRESH_TOKEN,
            {
              expiresIn: "1h",
            }
          );

          Token.update(
            {
              access_token,
              refresh_token,
            },
            {
              where: { user_id },
            }
          ).then(() => {
            res.redirect("/");
          });
        } else {
          console.log("비밀번호 오류 입니다.");
        }
      });
    })
    .catch((err) => {
      console.log("존재하지 않는 아이디 입니다.");
    });
});

module.exports = router;
