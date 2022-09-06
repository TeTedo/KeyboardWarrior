const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const {
  CommunityPost,
  User,
  CommunityPostLike,
  Follow,
  Chat,
} = require("../model");

router.get("/community/:game_name", loginCheck, async (req, res) => {
  const gameName = req.params.game_name;
  let loginedUserData = await getUserInfo(req, res);
  loginedUserData.profile_img = "../" + loginedUserData.profile_img;

  let chatObj = [];
  //채팅 정보 받아오기
  // for of 문으로 한 이유 : forEach에서 await를 안기다림, 외래키에서 원하는값 불러오기 실패
  await Chat.findAll({
    where: { speaker: loginedUserData.user_id },
    raw: true,
    attributes: ["listener", "message", "createdAt"],
  }).then(async (result) => {
    for (const value of result) {
      await User.findOne({
        where: { user_id: value.listener },
        attributes: ["profile_img", "nick_name"],
        raw: true,
      }).then((data) => {
        value.profile_img = "../" + data.profile_img;
        value.nick_name = data.nick_name;
        chatObj.push(value);
      });
    }
  });

  await Chat.findAll({
    where: { listener: loginedUserData.user_id },
    raw: true,
    attributes: ["speaker", "message", "createdAt"],
  }).then(async (result) => {
    for (const value of result) {
      await User.findOne({
        where: { user_id: value.speaker },
        attributes: ["profile_img", "nick_name"],
        raw: true,
      }).then((data) => {
        value.profile_img = "../" + data.profile_img;
        value.nick_name = data.nick_name;
        chatObj.push(value);
      });
    }
  });

  chatObj.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const followingUsers = await Follow.findAll({
    where: { follower_id: loginedUserData.user_id },
    attributes: ["following_id"],
  });
  await CommunityPost.findAll({
    where: { game_name: gameName },
    include: [
      {
        model: CommunityPostLike,
      },
      {
        model: User,
      },
    ],
  })
    .then((postData) => {
      postData.forEach((data) => {
        if (data.hashtag_values) {
          data.hashtag_values = JSON.parse(data.hashtag_values);
        } else {
          data.hashtag_values = [];
        }
      });
      let data = {};
      switch (gameName) {
        case "fifa":
          data = {
            gameName,
            title: "FIFFA ONLINE 4",
            postData,
            loginedUserData,
            followingUsers,
          };
          res.render("community/community", { data, chatObj });
          break;
        case "maple":
          data = {
            gameName,
            title: "MAPLE STORY",
            postData,
            loginedUserData,
            followingUsers,
          };
          res.render("community/community", { data, chatObj });
          break;
        case "lineage":
          data = {
            gameName,
            title: "LINEAGE",
            postData,
            loginedUserData,
            followingUsers,
          };
          res.render("community/community", { data, chatObj });
          break;
        default:
          // res.redirect("/community_hub");
          break;
      }
    })
    .catch((e) => {
      res.send("오류: " + e);
    });
});

// router.post();

module.exports = router;
