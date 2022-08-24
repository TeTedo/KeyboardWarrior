const express = require("express");
const router = express.Router();

router.get("/community/:game_name", (req, res) => {
    const gameName = req.params.game_name;
    switch (game_name) {
        case value:
            break;

        default:
            break;
    }
    res.render("community/community", { gameName, title });
});

module.exports = router;
