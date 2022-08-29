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

router.post("/posting/community/create", (req, res) => {
    const { game_name, user_id, nick_name, text, main_html, hashtag_values } =
        req.body;
    // fs.writeFile('../txt/communityPost/')
    console.log(hashtag_values);
    CommunityPost.create({
        game_name,
        user_id,
        nick_name,
        text,
        main_html,
        hashtag_values,
    });
    // .then(() => {
    //     res.redirect(`/community/${game_name}`);
    // }); 왜안돼지...
    // 가끔글쓰기 완료하고나서 방금쓴글이 바로 커뮤니티에 안뜨는 오류 발생해서 여기서 데이터넣기 끝내고 redirect로
    // 커뮤니티에 돌아가야할거 같은데 안먹힌다...
});

module.exports = router;
