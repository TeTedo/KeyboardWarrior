const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.render("main/main");
});

module.exports = router;
