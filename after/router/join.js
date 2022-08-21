const express = require("express");
const router = express.Router();
const User = require("../model/users");
const bcrypt = require("bcrypt");

router.get("/join", (req, res) => {
    res.render("join/join");
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
