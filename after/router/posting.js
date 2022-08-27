const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const fs = require("fs");
const imgUpload = require("../middleware/imgUpload");
const { MainPost } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.get("/posting", loginCheck, (req, res) => {
  res.render("posting/posting");
});

// uploadsImg/main 폴더가 없다면 만들어주기
fs.readdir("uploadsImg", (err) => {
  if (err) {
    fs.mkdirSync("uploadsImg");
  }
});

fs.readdir("uploadsImg/main", (err) => {
  if (err) {
    fs.mkdirSync("uploadsImg/main");
  }
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
    const { user_id, nick_name } = await getUserInfo(req, res);

    //이미지가 없는자리는 null로 표시되게끔 설정
    if (files.length < 5) {
      for (let i = files.length; i < 5; i++) {
        files[i] = [{ path: null }];
      }
    }

    //files 는 배열 형식으로 받아옴 값뽑아올때 참고 -> 콘솔찍어서 확인
    MainPost.create({
      user_id,
      nick_name,
      like: 0,
      comment: 0,
      text,
      image1: files[0][0].path,
      image2: files[1][0].path,
      image3: files[2][0].path,
      image4: files[3][0].path,
      image5: files[4][0].path,
    });

    res.redirect("/");
  }
);

module.exports = router;
