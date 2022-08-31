const express = require("express");
const router = express.Router();
const User = require("../model/users");
const bcrypt = require("bcrypt");
const fs = require("fs");

router.get("/join", (req, res) => {
    User.findAll({}).then(allData => {
        const dbIds = [];
        const dbNickNames = [];
        allData.map(eachData => {
            dbIds.push(eachData.user_id);
            dbNickNames.push(eachData.nick_name);
        });
        res.render("join/join", { dbIds, dbNickNames });
    });
});

// 프로필 이미지 경로 없으면 만들기
// fs.readdir("views/uploadsImg/profile", err => {
//     if (err) {
//         fs.mkdirSync(views / uploadsImg / profile);
//     }
// });

router.post("/join", (req, res) => {
    const { user_id, user_pw, name, nick_name, mobile_number, email } =
        req.body;
    const profile_img = "uploadsImg/profile/defaultImage.jpg";
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
        });
    });
});

module.exports = router;
