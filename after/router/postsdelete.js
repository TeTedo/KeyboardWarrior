const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost } = require("../model");

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
