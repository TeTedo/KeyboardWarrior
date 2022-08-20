const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");

// body-parser 역할
app.use(express.urlencoded({ extended: false }));

router.get("/join", (req, res) => {
    res.render("join/join");
});
router.post("/join", (req, res) => {});

module.exports = router;
