const express = require("express");
const loginStatus = require("../middleware/loginStatus");
const router = express.Router();
const { User } = require("../model");
const getUserId = require("../functions/getUserId");

router.get(
    "/",
    loginStatus,
    (req, res, next) => {
        // 로그인성공시
        if (req.session.login) {
            console.log("로그인 되어있는상태로 홈페이지 열었다.");
            const user_id = getUserId(req, res);

            User.findOne({
                where: { user_id },
            }).then(result => {
                const data = result.dataValues;
                res.render("main/main", { data });
            });
        } else {
            next();
        }
    },
    (req, res) => {
        res.render("main/main");
    }
);

module.exports = router;
