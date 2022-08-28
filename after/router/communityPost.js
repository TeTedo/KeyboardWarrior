const express = require("express");
const { CommunityPost } = require("../model");
const router = express.Router();

router.get("/post/:game_name/:post_id", (req, res) => {
  const game_name = req.params.game_name;
  const post_id = req.params.post_id;
  CommunityPost.findOne({
    where: { id: post_id },
    raw: true,
  }).then((e) => {
    const postData = e;
    res.render("communityPost/communityPost", { postData });
  });
});

module.exports = router;
