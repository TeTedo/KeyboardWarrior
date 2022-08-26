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
  (req, res) => {
    const { text } = req.body;
    const files = Object.values(req.files);
    const { user_id } = getUserId(req, res);

    MainPost.create({
      user_id,
    });
    res.redirect("/");
  }
);

module.exports = router;
