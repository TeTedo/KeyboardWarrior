const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { User } = require("../model");
const loginCheck = require("../middleware/loginCheck");
const bcrypt = require("bcrypt");

// 정보수정 페이지
router.get("/join/modify", loginCheck, async (req, res) => {
    const { user_id } = await getUserInfo(req, res);
    const dbIds = [];
    let dbNickNames = [];
    User.findAll({ raw: true }).then(allData => {
        allData.forEach(eachData => {
            dbIds.push(eachData.user_id);
            dbNickNames.push(eachData.nick_name);
        });
    });
    User.findOne({
        where: { user_id: user_id },
        raw: true,
    }).then(userData => {
        // 닉네임중복리스트에서 수정하는회원 닉네임은 빼주기
        dbNickNames = dbNickNames.filter(
            nickName => nickName !== userData.nick_name
        );
        const data = {
            dbIds,
            dbNickNames,
            userData,
        };
        res.render("joinModify/joinModify", { data });
    });
});

// 수정된정보 업데이트
router.post("/join/update", (req, res) => {
    const {
        user_id,
        updatePw,
        updateNickName,
        updateMobileNumber,
        updateEmail,
    } = req.body;
    // 비밀번호 암호화
    bcrypt.hash(updatePw, 10, (err, encrypted) => {
        User.update(
            {
                user_pw: encrypted,
                nick_name: updateNickName,
                mobile_number: updateMobileNumber,
                email: updateEmail,
            },
            { where: { user_id: user_id } }
        );
        req.session.access_token = null;
        req.session.refresh_token = null;
    });
});

module.exports = router;
