const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const getUserInfo = require("../functions/getUserInfo");
const { User, Chat } = require("../model");

router.get("/community_hub", loginCheck, async (req, res) => {
  let { user_id, nick_name, profile_img, follower, following } =
    await getUserInfo(req, res);

  profile_img = "../" + profile_img;
  let chatObj = [];
  //채팅 정보 받아오기
  // for of 문으로 한 이유 : forEach에서 await를 안기다림, 외래키에서 원하는값 불러오기 실패
  await Chat.findAll({
    where: { speaker: user_id },
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
    where: { listener: user_id },
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

  res.render("community_hub/community_hub", {
    user_id,
    nick_name,
    profile_img,
    follower,
    following,
    chatObj,
  });
});

module.exports = router;
