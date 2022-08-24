const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
router.get("/posting", loginCheck, (req, res) => {
  res.render("posting/posting");
});

module.exports = router;
