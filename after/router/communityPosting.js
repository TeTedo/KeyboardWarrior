const express = require("express");
const router = express.Router();

router.get("/community/posting", (req, res) => {
    const { gameName } = req.body;
});

module.exports = router;
