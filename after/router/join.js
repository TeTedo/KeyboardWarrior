const express = require("express");
const router = express.Router();
const User = require("../model/users");
const bcrypt = require("bcrypt");

router.get("/join", (req, res) => {
    // res.render("join/join");
    User.findAll({}).then(allData => {
        const dbIds = [];
        const dbNickNames = [];
        allData.map(eachData => {
            dbIds.push(eachData.user_id);
            dbNickNames.push(eachData.nick_name);
        });
        console.log(dbIds);
        console.log(dbNickNames);
        res.render("join/join", { dbIds, dbNickNames });
    });
});

router.post("/join", (req, res) => {
    const { user_id, user_pw, name, nick_name, mobile_number, email } =
        req.body;
    // bcrypt 활용 비밀번호 암호화
    bcrypt.hash(user_pw, 10, (err, encrypted) => {
        User.create({
            user_id,
            user_pw: encrypted,
            name,
            nick_name,
            mobile_number,
            email,
        });
    });
});

module.exports = router;
