const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { User, CommunityPost } = require("../model");

router.get("/posting/:game_name", (req, res) => {
  const game_name = req.params.game_name;
  const { user_id } = getUserInfo(req, res);
  User.findOne({
    where: { user_id: user_id },
  }).then((e) => {
    const data = e.dataValues;
    const nick_name = data.nick_name;
    res.render("communityPosting/communityPosting", {
      game_name,
      user_id,
      nick_name,
    });
  });
});
router.post("/posting/community/create", (req, res) => {
  const { game_name, user_id, nick_name, text, main_html, hashtag_values } =
    req.body;
  // fs.writeFile('../txt/communityPost/')
  console.log(hashtag_values);
  CommunityPost.create({
    game_name,
    user_id,
    nick_name,
    text,
    main_html,
    hashtag_values,
  });
});

module.exports = router;
