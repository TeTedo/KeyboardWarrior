const express = require("express");
const router = express.Router();

router.get("/post/:game_name/:id", (req, res) => {
    const game_name = req.params.game_name;
    const id = req.params.id;
});

module.exports = router;
