const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost, MainComment } = require("../model");

router.post("/posts/:commentId/comment/delete", async (req, res) => {
  const id = req.params.commentId;
  const { user_id } = await getUserInfo(req, res);
  const { post_id, user_id: userId } = await MainComment.findOne({
    where: {
      id,
    },
    raw: true,
  });

  // 지금 로그인되어있는 아이디와 댓글쓴 아이디 같은지 다시한번 확인
  if (user_id == userId) {
    await MainComment.destroy({
      where: {
        id,
      },
    });

    //포스트 데이터베이스에서 댓글갯수 1개 줄이기
    const { comment } = await MainPost.findOne({
      where: { id: post_id },
    });
    await MainPost.update(
      {
        comment: comment - 1,
      },
      {
        where: { id: post_id },
      }
    );

    res.send(`/posts/${post_id}`);
  }
});

module.exports = router;
