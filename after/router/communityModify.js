const router = require("express").Router();
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");
const { CommunityPost } = require("../model");
const imgUpload = require("../middleware/communityImgUpload");

// 수정페이지
router.get("/community/:post_id/modify", loginCheck, async (req, res) => {
    const id = req.params.post_id;
    const { user_id, nick_name, profile_img } = await getUserInfo;
    const postData = await CommunityPost.findOne({
        where: { id },
        raw: true,
    });
    res.render("communityModify/communityModify", {
        user_id,
        nick_name,
        profile_img,
        postData,
    });
});

//수정
router.post(
    "/community/:post_id/modify",
    imgUpload.fields([
        { name: "files1" },
        { name: "files2" },
        { name: "files3" },
        { name: "files4" },
        { name: "files5" },
    ]),
    (req, res) => {
        const id = req.params.post_id;
        const { text, hashTag, imgUpdate, game_name } = req.body;
        const imgPathObj = JSON.parse(imgUpdate);
        let files = Object.values(req.files);
        files.forEach(file => {
            // 새로받은 이미지 경로 가공
            file[0].path = file[0].path
                .replace("views\\", "")
                .replace("views/", "");
            // 객체에 추가하기
            imgPathObj[file[0].fieldname.replace("files", "")] = file[0].path;
        });
        // key값이 숫자면 알아서 숫자순으로 정렬되는듯?
        // 객체 반복문 돌리기
        const tempArr = new Array();
        for (key in imgPathObj) {
            // key 에는 알아서 key값이 들어감
            // imgPathObj.key 이런식으로는 못불러옴
            tempArr.push(imgPathObj[key]);
        }
        const [image1, image2, image3, image4, image5] = tempArr || null;
        CommunityPost.update(
            {
                text,
                hashtag_values: hashTag,
                image1,
                image2,
                image3,
                image4,
                image5,
            },
            { where: { id } }
        ).then(res.redirect(`/post/${game_name}/${id}`));
    }
);

// 삭제
router.get("/community/:post_id/delete", (req, res) => {
    const id = req.params.post_id;
    CommunityPost.findOne({
        where: { id },
    }).then(post => {
        const { game_name } = post;
        CommunityPost.destroy({
            where: { id },
        }).then(res.redirect(`/community/${game_name}`));
    });
});

module.exports = router;
