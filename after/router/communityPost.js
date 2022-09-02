const express = require("express");
const router = express.Router();
const {
    CommunityPost,
    Follow,
    CommunityPostLike,
    CommunityComment,
    User,
} = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");

// 커뮤니티 포스팅 페이지용
router.get("/post/:game_name/:post_id", loginCheck, async (req, res) => {
    const game_name = req.params.game_name;
    const post_id = req.params.post_id;
    let { user_id, nick_name, profile_img } = await getUserInfo(req, res);
    profile_img = "../" + profile_img;
    const postData = await CommunityPost.findOne({
        where: { id: post_id },
        // raw: true,
        include: [
            {
                model: User,
            },
        ],
    });
    const commentData = await CommunityComment.findAll({
        where: { post_id },
        raw: true,
    });
    const likeData = await CommunityPostLike.findOne({
        where: { post_id, user_id },
    });
    let follower_id;
    let following_id;
    await Follow.findOne({
        where: { follower_id: user_id },
    })
        .then(result => {
            following_id = result.dataValues.following_id;
            follower_id = result.dataValues.follower_id;
        })
        .catch(err => {
            following_id = "";
            follower_id = "";
        });
    console.log(user_id);
    if (postData) {
        postData.hashtag_values = JSON.parse(postData.hashtag_values);
    }
    res.render("communityPost/communityPost", {
        game_name,
        user_id,
        nick_name,
        profile_img,
        postData,
        commentData,
        likeData,
        following_id,
        follower_id,
    });
});

// ajax get 으로 포스터 데이터 보내주는거
router.get("/community/post/data", (req, res) => {
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
        // postData.main_html = JSON.parse(postData.main_html);
        res.send(postData);
    });
});

module.exports = router;
