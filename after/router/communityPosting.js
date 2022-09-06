const express = require("express");
const fs = require("fs");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");
const imgUpload = require("../middleware/communityImgUpload");
const { User, CommunityPost, Chat } = require("../model");

router.get("/posting/:game_name", loginCheck, async (req, res) => {
  const game_name = req.params.game_name;
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
  res.render("communityPosting/communityPosting", {
    follower,
    following,
    game_name,
    user_id,
    nick_name,
    profile_img,
    chatObj,
  });
});

// 커뮤니티 이미지 폴더 없으면 생성
fs.readdir("views/uploadsImg/community", (err) => {
  if (err) {
    fs.mkdirSync("views/uploadsImg/community");
  }
});

//해시태그값 따로 받기
// router.post("/posting/community/hashtag/create", (req, res) => {
//     const { hashtag_values } = req.body;
// });
router.post(
  "/posting/community/create",
  loginCheck,
  imgUpload.fields([
    { name: "files1" },
    { name: "files2" },
    { name: "files3" },
    { name: "files4" },
    { name: "files5" },
  ]),
  async (req, res) => {
    const { game_name, text, hashTag } = req.body;
    console.log(req.files);
    console.log(hashTag);
    const files = Object.values(req.files);
    const { user_id } = await getUserInfo(req, res);

    // 이미지 없는자리 null 로 표시
    if (files.length < 5) {
      for (let i = files.length; i < 5; i++) {
        files[i] = [{ path: null }];
      }
    }

    //path 바꿔주기
    for (let i = 0; i < 5; i++) {
      if (files[i][0].path) {
        const file = files[i][0];
        file.path = file.path.replace("views\\", "");
        file.path = file.path.replace("views/", "");
      }
    }

    CommunityPost.create({
      game_name,
      user_id,
      text,
      hashtag_values: hashTag,
      like: 0,
      comment: 0,
      image1: files[0][0].path,
      image2: files[1][0].path,
      image3: files[2][0].path,
      image4: files[3][0].path,
      image5: files[4][0].path,
    }).then(() => res.redirect(`/community/${game_name}`));
  }
);

module.exports = router;
