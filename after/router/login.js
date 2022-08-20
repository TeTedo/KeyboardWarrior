const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/login", (req, res) => {
    fs.readFile("views/login/login.html", "utf-8", (err, data) => {
        console.log("로그인");
        res.send(data);
    });
});

module.exports = router;
