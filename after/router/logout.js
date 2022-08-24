const express = require("express");
const router = express.Router();
const { Token } = require("../model");

const getUserId = require("../functions/getUserId");
router.get("/logout", (req, res) => {
  const user_id = getUserId(req, res);
  Token.destroy({
    where: { user_id },
  }).then(() => {
    req.session.access_token = null;
    req.session.refresh_token = null;
    res.redirect("/");
  });
});

module.exports = router;
