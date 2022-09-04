const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost, User, CommunityPostLike, Follow } = require("../model");

router.get("/community/:game_name", loginCheck, async (req, res) => {
    const gameName = req.params.game_name;
    const loginedUserData = await getUserInfo(req, res);
    const followingUsers = await Follow.findAll({
        where: { follower_id: loginedUserData.user_id },
        attributes: ["following_id"],
    });
    await CommunityPost.findAll({
        where: { game_name: gameName },
        include: [
            {
                model: CommunityPostLike,
            },
            {
                model: User,
            },
        ],
    })
        .then(postData => {
            postData.forEach(data => {
                if (data.hashtag_values) {
                    data.hashtag_values = JSON.parse(data.hashtag_values);
                } else {
                    data.hashtag_values = [];
                }
            });
            let data = {};
            switch (gameName) {
                case "fifa":
                    data = {
                        gameName,
                        title: "FIFFA ONLINE 4",
                        postData,
                        loginedUserData,
                        followingUsers,
                    };
                    res.render("community/community", { data });
                    break;
                case "maple":
                    data = {
                        gameName,
                        title: "MAPLE STORY",
                        postData,
                        loginedUserData,
                        followingUsers,
                    };
                    res.render("community/community", { data });
                    break;
                case "lineage":
                    data = {
                        gameName,
                        title: "LINEAGE",
                        postData,
                        loginedUserData,
                        followingUsers,
                    };
                    res.render("community/community", { data });
                    break;
                default:
                    // res.redirect("/community_hub");
                    break;
            }
        })
        .catch(e => {
            res.send("오류: " + e);
        });
});

// router.post();

module.exports = router;
