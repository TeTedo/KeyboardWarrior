const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");

router.get("/join", (req, res) => {
    fs.readFile("join/join.html", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    });
});

module.exports = router;
