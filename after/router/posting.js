const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");

router.get("/posting", loginCheck, (req, res) => {
  res.render("posting/posting");
});

router.post("/posting", loginCheck, (req, res) => {
  const { img, text } = req.body;
  console.log(img, text);
});

module.exports = router;
