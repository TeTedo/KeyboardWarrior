const router = require("express").Router();
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost } = require("../model");

router.get("/community/:post_id/modify", loginCheck, async (req, res) => {
    const postId = req.params.post_id;
    const { user_id, nick_name, profile_img } = await getUserInfo;
    const postData = await CommunityPost.findOne({
        where: { id: postId },
        raw: true,
    });
    res.render("communityModify/communityModify", {
        user_id,
        nick_name,
        profile_img,
        postData,
    });
});

module.exports = router;
