const express = require("express");
const loginStatus = require("../middleware/loginStatus");
const router = express.Router();
const { User } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.get(
  "/",
  async (req, res, next) => {
    // 로그인성공시
    if (req.session.login) {
      console.log("로그인 되어있는상태로 홈페이지 열었다.");
      const { user_id, nick_name } = await getUserInfo(req, res);
      res.render("main/main", { user_id, nick_name });
    } else {
      next();
    }
  },
  (req, res) => {
    res.render("main/main", { user_id: "", nick_name: "" });
  }
);

module.exports = router;
