const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
router.get("/community_hub", loginCheck, (req, res) => {
  res.render("community_hub/community_hub");
});

module.exports = router;
