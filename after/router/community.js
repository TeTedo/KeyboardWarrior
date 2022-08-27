const express = require("express");
const getUserInfo = require("../functions/getUserInfo");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost, User } = require("../model");

router.get("/community/:game_name", loginCheck, async (req, res) => {
    const gameName = req.params.game_name;
    const { user_id: userIdForProfile, nick_name: nickNameForProfile } =
        await getUserInfo(req, res);
    CommunityPost.findAll({
        where: { game_name: gameName },
        raw: true,
    })
        .then(e => {
            const postData = e;
            postData.forEach(
                data => (data.hashtag_values = JSON.parse(data.hashtag_values))
            );
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
                        // hashTag: JSON.stringify(postData.hashtag_values),
                        hashTag: postData.hashtag_values,
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
        .catch(e => {
            // const data = null;
            // res.render("community/community", { data });
            res.send("테이블이 없어요 서버 npm start 한번만");
        });
});

// router.post();

module.exports = router;
