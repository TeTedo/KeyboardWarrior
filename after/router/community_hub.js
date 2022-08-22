const express = require("express");
const router = express.Router();

router.get("community_hub", (req, res) => {
    res.render("community_hub");
});

module.exports = router;
