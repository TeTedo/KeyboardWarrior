const express = require("express");
const router = express.Router();
const User = require("../model/users");
const bcrypt = require("bcrypt");
const fs = require("fs");

router.get("/join", async (req, res) => {
  const dbIds = [];
  const dbNickNames = [];
  (await User.findAll({})).forEach((data) => {
    dbIds.push(data.user_id);
    dbNickNames.push(data.nick_name);
  });
  res.render("join/join", { dbIds, dbNickNames });
});

// 프로필 이미지 경로 없으면 만들기
// fs.readdir("views/uploadsImg/profile", err => {
//     if (err) {
//         fs.mkdirSync(views / uploadsImg / profile);
//     }
// });

router.post("/join", (req, res) => {
  const { user_id, user_pw, name, nick_name, mobile_number, email } = req.body;
  const randNum = Math.floor(Math.random() * 7 + 1);
  const profile_img = `uploadsImg/profile/defaultImage${randNum}.jpg`;
  // bcrypt 활용 비밀번호 암호화
  bcrypt.hash(user_pw, 10, (err, encrypted) => {
    User.create({
      user_id,
      user_pw: encrypted,
      name,
      nick_name,
      mobile_number,
      email,
      profile_img,
      follower: 0,
      following: 0,
      login: 0,
    });
  });
});

module.exports = router;
