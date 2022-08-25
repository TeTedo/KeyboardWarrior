const express = require("express");
const router = express.Router();

router.get("/logout", (req, res) => {
  if (req.session?.access_token) {
    req.session.access_token = null;
    req.session.refresh_token = null;
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
