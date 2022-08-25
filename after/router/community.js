const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost } = require("../model");

router.get("/community/:game_name", (req, res) => {
    const gameName = req.params.game_name;
    CommunityPost.findAll({
        where: { game_name: gameName },
        raw: true,
    })
        .then(e => {
            const postData = e;
            let data = {};
            switch (gameName) {
                case "fifa":
                    data = {
                        gameName,
                        title: "FIFFA ONLINE 4",
                        postData,
                    };
                    res.render("community/community", { data });
                    break;
                case "maple":
                    data = {
                        gameName,
                        title: "MAPLE STORY",
                        postData,
                    };
                    res.render("community/community", { data });
                    break;
                case "lineage":
                    data = {
                        gameName,
                        title: "LINEAGE",
                        postData,
                    };
                    res.render("community/community", { data });
                    break;
                default:
                    // res.redirect("/community_hub");
                    break;
            }
        })
        .catch(() => {
            const postData = null;
            switch (gameName) {
                case "fifa":
                    data = {
                        gameName,
                        title: "FIFFA ONLINE 4",
                        postData,
                    };
                    res.render("community/community", { data });
                    break;
                case "maple":
                    data = {
                        gameName,
                        title: "MAPLE STORY",
                        postData,
                    };
                    res.render("community/community", { data });
                    break;
                case "lineage":
                    data = {
                        gameName,
                        title: "LINEAGE",
                        postData,
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
