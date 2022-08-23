const express = require("express");
const router = express.Router();

router.get("/posting", (req, res) => {
  res.render("posting/posting");
});

module.exports = router;
