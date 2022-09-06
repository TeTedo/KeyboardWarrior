const express = require("express");
const router = express.Router();
const { User, Chat, MainPost, CommunityPost, Follow } = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");

router.get("/profile/:user_id", loginCheck, async (req, res) => {
  let { user_id, nick_name, profile_img, follower, following } =
    await getUserInfo(req, res);
  profile_img = "../" + profile_img;
  // 프로필정보
  const writer = req.params.user_id;
  const writerData = await User.findOne({
    where: { user_id: writer },
    raw: true,
  });
  writerData.profile_img = "../" + writerData.profile_img;

  //프로필 주인이 쓴글들 모아오기
  let postArr = [];

  await MainPost.findAll({
    where: { user_id: writer },
    raw: true,
    attributes: ["id", "image1", "text", "createdAt", "like", "comment"],
  }).then((result) => {
    result.forEach((el) => {
      el.image1 = "../" + el.image1;
      postArr.push(el);
    });
  });

  await CommunityPost.findAll({
    where: { user_id: writer },
    raw: true,
    attributes: [
      "id",
      "image1",
      "text",
      "createdAt",
      "hashtag_values",
      "game_name",
      "like",
      "comment",
    ],
  }).then((result) => {
    result.forEach((el) => {
      el.image1 = "../" + el.image1;
      if (el.hashtag_values) {
        el.hashtag_values = JSON.parse(el.hashtag_values);
      }
      postArr.push(el);
    });
  });
  postArr.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

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

  //팔로우 여부
  const follow = await Follow.findOne({
    where: { follower_id: user_id, following_id: writerData.user_id },
  });
  res.render("profile/profile", {
    user_id,
    nick_name,
    profile_img,
    follower,
    following,
    chatObj,
    writerData,
    postArr,
    follow,
  });
});

module.exports = router;
