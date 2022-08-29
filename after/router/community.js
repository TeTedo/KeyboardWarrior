const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost, User } = require("../model");

router.get("/community/:game_name", loginCheck, async (req, res) => {
  const gameName = req.params.game_name;
  const { user_id: userIdForProfile, nick_name: nickNameForProfile } =
    await getUserInfo(req, res);
  // const = function (postData, hashTag) {
  //     return postData.filter(post => {
  //         console.log(hashTag);
  //         return post.posting_data_obj.hashtag_values.includes(hashTag);
  //     });
  // };
  CommunityPost.findAll({
    where: { game_name: gameName },
    raw: true,
  })
    .then((postData) => {
      if (postData) {
        postData.forEach((data) => {
          data.hashtag_values = JSON.parse(data.hashtag_values);
          data.posting_data_obj = JSON.parse(data.posting_data_obj);
          data.posting_data_obj.hashtag_values = JSON.parse(
            data.posting_data_obj.hashtag_values
          );
        });
      } else {
        postData = null;
      }
      let data = {};
      switch (gameName) {
        case "fifa":
          data = {
            gameName,
            title: "FIFFA ONLINE 4",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        case "maple":
          data = {
            gameName,
            title: "MAPLE STORY",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        case "lineage":
          data = {
            gameName,
            title: "LINEAGE",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        default:
          // res.redirect("/community_hub");
          break;
      }
    })
    .catch((e) => {
      let postData = null;
      switch (gameName) {
        case "fifa":
          data = {
            gameName,
            title: "FIFFA ONLINE 4",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        case "maple":
          data = {
            gameName,
            title: "MAPLE STORY",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        case "lineage":
          data = {
            gameName,
            title: "LINEAGE",
            postData,
            userIdForProfile,
            nickNameForProfile,
          };
          res.render("community/community", { data });
          break;
        default:
          // res.redirect("/community_hub");
          break;
      }
    });
});

// router.post();

module.exports = router;
