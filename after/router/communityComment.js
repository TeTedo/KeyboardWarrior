const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { CommunityPost, CommunityComment, User } = require("../model");

router.post("/community/:postId/comment", async (req, res) => {
    const post_id = req.params.postId;
    const { text } = req.body;
    const { user_id, nick_name } = await getUserInfo(req, res);

    let commentNum;
    let game_name;
    await CommunityPost.findOne({
        where: { id: post_id },
    }).then(result => {
        commentNum = result.dataValues.comment;
        game_name = result.dataValues.game_name;
    });

    const { profile_img } = await User.findOne({
        where: { user_id },
    });

    await CommunityPost.update(
        {
            comment: commentNum + 1,
        },
        {
            where: { id: post_id },
        }
    );

    CommunityComment.create({
        post_id,
        user_id,
        nick_name,
        text,
        profile_img,
    }).then(() => {
        res.redirect(`/post/${game_name}/${post_id}`);
    });
});

router.post("/community/:commentId/comment/delete", async (req, res) => {
    const id = req.params.commentId;
    const { user_id } = await getUserInfo(req, res);
    const { post_id, user_id: userId } = await CommunityComment.findOne({
        where: {
            id,
        },
        raw: true,
    });

    // 지금 로그인되어있는 아이디와 댓글쓴 아이디 같은지 다시한번 확인
    if (user_id == userId) {
        await CommunityComment.destroy({
            where: {
                id,
            },
        });

        //포스트 데이터베이스에서 댓글갯수 1개 줄이기
        const { comment, game_name } = await CommunityPost.findOne({
            where: { id: post_id },
        });
        await CommunityPost.update(
            {
                comment: comment - 1,
            },
            {
                where: { id: post_id },
            }
        );

        res.send(`/post/${game_name}/${post_id}`);
    }
});

module.exports = router;
