const express = require("express");
const router = express.Router();
const { MainPost } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.get("/posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
  });
  const { user_id: userId, nick_name: userNickName } = await getUserInfo(
    req,
    res
  );
  res.render("posts/posts", { userId, userNickName, postData });
});

module.exports = router;
