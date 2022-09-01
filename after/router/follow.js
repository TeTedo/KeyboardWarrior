const express = require("express");
const router = express.Router();
const { Follow } = require("../model");

router.post("/follow", (req, res) => {
  const { follow, follower, following } = req.body;
  if (follow == "true") {
    Follow.create({
      following_id: following,
      follower_id: follower,
    });
  } else {
    Follow.destroy({
      where: { following_id: following, follower_id: follower },
    });
  }
});

module.exports = router;
