const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const fs = require("fs");
const imgUpload = require("../middleware/imgUpload");
const { MainPost, Chat, User } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.get("/posting", loginCheck, async (req, res) => {
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

  res.render("posting/posting", {
    user_id,
    nick_name,
    profile_img,
    follower,
    following,
    chatObj,
  });
});

router.post(
  "/posting",
  loginCheck,
  imgUpload.fields([
    { name: "files1" },
    { name: "files2" },
    { name: "files3" },
    { name: "files4" },
    { name: "files5" },
  ]),
  async (req, res) => {
    const { text } = req.body;
    const files = Object.values(req.files);
    const { user_id, nick_name, profile_img } = await getUserInfo(req, res);

    //이미지가 없는자리는 null로 표시되게끔 설정
    if (files.length < 5) {
      for (let i = files.length; i < 5; i++) {
        files[i] = [{ path: null }];
      }
    }

    //path 바꿔주기
    for (let i = 0; i < 5; i++) {
      if (files[i][0].path) {
        const test = files[i][0].path;
        files[i][0].path = test.replace("views\\", "");
        files[i][0].path = files[i][0].path.replace("views/", "");
      }
    }

    //files 는 배열 형식으로 받아옴 값뽑아올때 참고 -> 콘솔찍어서 확인
    MainPost.create({
      user_id,
      nick_name,
      profile_img,
      like: 0,
      comment: 0,
      text,
      image1: files[0][0].path,
      image2: files[1][0].path,
      image3: files[2][0].path,
      image4: files[3][0].path,
      image5: files[4][0].path,
    }).then(() => {
      res.redirect("/");
    });
  }
);

module.exports = router;
