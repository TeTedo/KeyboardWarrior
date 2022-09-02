const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { CommunityPostLike, CommunityPost } = require("../model");

router.post("/community/:post_id/like", async (req, res) => {
  console.log("들어옴");
  const post_id = req.params.post_id;
  const { userLike, userId } = req.body;
  const { user_id, nick_name } = await getUserInfo(req, res);
  const { like, game_name } = await CommunityPost.findOne({
    where: { id: post_id },
  });
  // 좋아요 누른아이디와 현재 로그인되어있는 아이디 비교
  if (userId == user_id) {
    if (userLike == "true") {
      await CommunityPostLike.create({
        user_id,
        nick_name,
        post_id,
      });
      await CommunityPost.update(
        {
          like: like + 1,
        },
        {
          where: { id: post_id },
        }
      );
    } else {
      await CommunityPostLike.destroy({
        where: { user_id, post_id },
      });
      await CommunityPost.update(
        {
          like: like - 1,
        },
        {
          where: { id: post_id },
        }
      );
    }
  } else {
    res.redirect(`/post/${game_name}/${post_id}`);
  }
});

module.exports = router;
