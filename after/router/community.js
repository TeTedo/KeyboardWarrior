const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost, User } = require("../model");

router.get("/community/:game_name", loginCheck, async (req, res) => {
    const gameName = req.params.game_name;
    const {
        user_id: userIdForProfile,
        nick_name: nickNameForProfile,
        profile_img: imageForProfile,
    } = await getUserInfo(req, res);
    CommunityPost.findAll({
        where: { game_name: gameName },
        // raw: true,
        include: [
            {
                model: User,
            },
        ],
    })
        .then(postData => {
            if (postData) {
                postData.forEach(data => {
                    data.hashtag_values = JSON.parse(data.hashtag_values);
                    // console.log(data.User);
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
                        imageForProfile,
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
                        imageForProfile,
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
                        imageForProfile,
                    };
                    res.render("community/community", { data });
                    break;
                default:
                    // res.redirect("/community_hub");
                    break;
            }
        })
        .catch(e => {
            res.send("오류: ", e);
        });
});

// router.post();

module.exports = router;
