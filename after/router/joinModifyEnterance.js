const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");
const User = require("../model/users");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/join/modify/enterance", loginCheck, (req, res) => {
    const data = null;
    res.render("joinModifyEnterance/joinModifyEnterance", { data });
});
router.post("/join/modify/enterance", loginCheck, async (req, res) => {
    const { user_id } = await getUserInfo(req, res);
    const { user_pw: inputPw } = req.body;
    User.findOne({
        where: { user_id: user_id },
    }).then(result => {
        const data = result.dataValues;
        bcrypt.compare(inputPw, data.user_pw, (err, same) => {
            if (same) {
                res.redirect("/join/modify");
            } else {
                const data = true;
                res.render("joinModifyEnterance/joinModifyEnterance", { data });
            }
        });
    });
});
module.exports = router;
