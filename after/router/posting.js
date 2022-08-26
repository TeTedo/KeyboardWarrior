const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const fs = require("fs");
const imgUpload = require("../middleware/imgUpload");

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
  imgUpload.single("selectImg"),
  (req, res) => {
    res.json({ filename: `${req.file.filename}` });
  }
);

module.exports = router;
