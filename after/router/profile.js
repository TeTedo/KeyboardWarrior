const express = require("express");
const router = express.Router();
const { User, Chat } = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");

router.get("/profile/:user_id", loginCheck, async (req, res) => {
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
    return a.createdAt - b.createdAt;
  });

  res.render("profile/profile", {
    user_id,
    nick_name,
    profile_img,
    follower,
    following,
    chatObj,
  });
});

module.exports = router;
