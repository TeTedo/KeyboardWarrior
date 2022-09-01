const express = require("express");
const { CommunityPost } = require("../model");
const router = express.Router();

router.get("/post/:game_name/:post_id", (req, res) => {
    const game_name = req.params.game_name;
    const post_id = req.params.post_id;
    CommunityPost.findOne({
        where: { id: post_id },
        raw: true,
    }).then(postData => {
        postData.main_html = JSON.parse(postData.main_html);
        res.render("communityPost/communityPost", { postData });
    });
});

// ajax get 테스트용
router.get("/poster/test/", (req, res) => {
    console.log("시작");
    console.log(req.query.post_id);
    const { post_id } = req.query;
    // res.send("hi");
    // console.log(req);
    // const { post_id } = req.body;
    CommunityPost.findOne({
        where: { id: post_id },
        raw: true,
    }).then(postData => {
        postData.main_html = JSON.parse(postData.main_html);
        res.send(postData);
    });
});

module.exports = router;
