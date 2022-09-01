const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");
const { User, CommunityPost } = require("../model");

router.get("/posting/:game_name", loginCheck, async (req, res) => {
    const game_name = req.params.game_name;
    const { user_id, nick_name } = await getUserInfo(req, res);
    res.render("communityPosting/communityPosting", {
        game_name,
        user_id,
        nick_name,
    });
});

router.post("/posting/community/create", async (req, res) => {
    const { profile_img } = await getUserInfo(req, res);
    const { game_name, user_id, nick_name, text, main_html, hashtag_values } =
        req.body;
    CommunityPost.create({
        game_name,
        user_id,
        nick_name,
        text,
        main_html,
        hashtag_values,
        profile_img,
    }).then(() => res.send(`/community/${game_name}`));
});

module.exports = router;
