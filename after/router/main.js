const express = require("express");
const loginStatus = require("../middleware/loginStatus");
const router = express.Router();

router.get(
  "/",
  loginStatus,
  (req, res, next) => {
    if (req.session.login) {
      console.log("로그인 되어있는상태로 홈페이지 열었다.");
      res.render("main/main");
    } else {
      next();
    }
  },
  (req, res) => {
    res.render("main/main");
  }
);

module.exports = router;
