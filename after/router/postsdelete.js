const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost } = require("../model");

router.get("/posts/:postId/delete", async (req, res) => {
  const postId = req.params.postId;
  console.log(req.body);

  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
  });

  const { user_id, nick_name } = await getUserInfo(req, res);

  // 로그인 유저와 글 작성자 비교
  if (postData.user_id !== user_id) {
    res.redirect("/");
  }
});

router.post("/posts/:postId/delete", async (req, res) => {
  const postId = req.params.postId;
  const { user_id } = await getUserInfo(req, res);
  const { deletemotion } = req.body;
  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
  });

  if (postData.user_id !== user_id) {
    res.redirect("/");
  } else {
    if (deletemotion) {
      await MainPost.destroy({
        where: { id: postId },
      });

      res.send("/");
    }
  }
});

module.exports = router;
