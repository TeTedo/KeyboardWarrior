const express = require("express");
const router = express.Router();
const { MainPost } = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const checkSameUser = require("../middleware/checkSameUser");

router.get("/posts/:postId/modify", async (req, res) => {
  const postId = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
  });

  const { user_id } = await getUserInfo(req, res);

  // 로그인 유저와 글 작성자 비교
  if (postData.user_id !== user_id) {
    res.redirect("/");
  }
  //정상 수정 구간
  else {
    console.log(postData);
    res.render("postsModify/postsModify", { postData });
  }
});

router.post("/posts/:postId/modify", (req, res) => {
  console.log(req.body);
  console.log(req);
  res.end("끝");
  // res.redirect("/");
});

module.exports = router;
