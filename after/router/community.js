const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost, User } = require("../model");

router.get("/community/:game_name", loginCheck, (req, res) => {
  const gameName = req.params.game_name;
  const { user_id: userIdForProfile } = getUserInfo(req, res);
  User.findOne({
    where: { user_id: userIdForProfile },
  }).then((e) => {
    const nickNameForProfile = e.nick_name;
    CommunityPost.findAll({
      where: { game_name: gameName },
      raw: true,
    })
      .then((e) => {
        const postData = e;
        let data = {};
        switch (gameName) {
          case "fifa":
            data = {
              gameName,
              title: "FIFFA ONLINE 4",
              postData,
              userIdForProfile,
              nickNameForProfile,
            };
            res.render("community/community", { data });
            break;
          case "maple":
            data = {
              gameName,
              title: "MAPLE STORY",
              postData,
              // hashTag: JSON.parse(postData.hashtag_values),
              hashTag: postData.hashtag_values,
              userIdForProfile,
              nickNameForProfile,
            };
            res.render("community/community", { data });
            break;
          case "lineage":
            data = {
              gameName,
              title: "LINEAGE",
              postData,
              userIdForProfile,
              nickNameForProfile,
            };
            res.render("community/community", { data });
            break;
          default:
            // res.redirect("/community_hub");
            break;
        }
      })
      .catch((e) =>
        res.send("communityPost 테이블 없음 서버 재시작한번 해주세요~")
      );
  });
});
// router.post();

module.exports = router;
