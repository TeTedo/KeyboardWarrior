const express = require("express");
const router = express.Router();
const { MainPost, MainComment, MainPostLike } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.get("/posts/:postId", async (req, res) => {
  const post_id = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: post_id },
    raw: true,
  });
  const { user_id, nick_name } = await getUserInfo(req, res);
  const commentData = await MainComment.findAll({
    where: { post_id },
    raw: true,
  });
  const likeData = await MainPostLike.findOne({
    where: { post_id, user_id },
  });

  res.render("posts/posts", {
    user_id,
    nick_name,
    postData,
    commentData,
    likeData,
  });
});

module.exports = router;
