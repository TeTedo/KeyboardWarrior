const express = require("express");
const router = express.Router();
const { MainPost } = require("../model");

router.get("/posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
  });

  res.render("posts/posts", { postData });
});

module.exports = router;
