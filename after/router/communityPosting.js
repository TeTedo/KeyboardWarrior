const express = require("express");
const router = express.Router();
const getUserId = require("../functions/getUserId");
const { User } = require("../model");

router.get("/posting/:game_name", (req, res) => {
    const game_name = req.params.game_name;
    const user_id = getUserId(req, res);
    User.findOne;
    res.render("communityPosting/communityPosting", { game_name, user_id });
});
router.post("/posting/create", (req, res) => {
    const { game_name, user_id, nick_name, html } = req.body;
});

module.exports = router;
