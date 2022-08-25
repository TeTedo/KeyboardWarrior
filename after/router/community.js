const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
const CommunityPost = require("../model/communityPosts");
router.get("/community/:game_name", (req, res) => {
    const gameName = req.params.game_name;
    let data = {};
    switch (gameName) {
        case "fifa":
            data = {
                gameName,
                title: "FIFFA ONLINE 4",
            };
            res.render("community/community", { data });
            break;
        case "maple":
            data = {
                gameName,
                title: "MAPLE STORY",
            };
            res.render("community/community", { data });
            break;
        case "lineage":
            data = {
                gameName,
                title: "LINEAGE",
            };
            res.render("community/community", { data });
            break;
        default:
            // res.redirect("/community_hub");
            break;
    }
});
// router.post();

module.exports = router;
