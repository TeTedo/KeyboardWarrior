const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const getMainPostInfo = require("../functions/getMainPostInfo");

router.get(
  "/",
  async (req, res, next) => {
    // 로그인성공시
    if (req.session.login) {
      console.log("로그인 되어있는상태로 홈페이지 열었다.");
      //로그인한 유저 정보
      const { user_id, nick_name } = await getUserInfo(req, res);
      // 게시글들 정보 받아오기
      const postData = await getMainPostInfo;

      res.render("main/main", { user_id, nick_name, postData });
    } else {
      next();
    }
  },
  async (req, res) => {
    // 게시글들 정보 받아오기
    const postData = await getMainPostInfo;

    res.render("main/main", { user_id: "", nick_name: "", postData });
  }
);

module.exports = router;
