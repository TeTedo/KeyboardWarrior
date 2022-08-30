const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const fs = require("fs");
const imgUpload = require("../middleware/imgUpload");
const { MainPost } = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const getMainPostInfo = require("../functions/getMainPostInfo");

router.get("/posting", loginCheck, async (req, res) => {
  const { user_id, nick_name } = await getUserInfo(req, res);
  res.render("posting/posting", { user_id, nick_name });
});

fs.readdir("views/uploadsImg/main", (err) => {
  if (err) {
    fs.mkdirSync("views/uploadsImg/main");
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
