const express = require("express");
const router = express.Router();
const User = require("../model/users");

router.get("/join", (req, res) => {
    res.render("join/join");
});
router.post("/join", (req, res) => {
    const { user_id, user_pw, name, nick_name, mobile_number, email } =
        req.body;
    User.create({
        user_id,
        user_pw,
        name,
        nick_name,
        mobile_number,
        email,
    });
    res.redirect("/login");
});

module.exports = router;
