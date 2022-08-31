const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost, MainComment } = require("../model");

router.post("/posts/:postId/comment", async (req, res) => {
  const post_id = req.params.postId;
  const { text } = req.body;
  const { user_id, nick_name } = await getUserInfo(req, res);

  const commentNum = await MainPost.findOne({
    where: { id: post_id },
  }).then((result) => {
    return result.dataValues.comment;
  });

  await MainPost.update(
    {
      comment: commentNum + 1,
    },
    {
      where: { id: post_id },
    }
  );

  MainComment.create({
    post_id,
    user_id,
    nick_name,
    text,
  }).then(() => {
    res.redirect(`/posts/${post_id}`);
  });
});

module.exports = router;
