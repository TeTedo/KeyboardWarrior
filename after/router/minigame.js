const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
router.get("/minigame", loginCheck, (req, res) => {
  res.render("minigame/minigame");
});

module.exports = router;
