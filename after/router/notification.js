const express = require("express");
const router = express.Router();
const { Notification } = require("../model");

router.post("/notification", (req, res) => {
  const { postid } = req.body;
  postid.forEach((el) => {
    Notification.update(
      {
        check: true,
      },
      {
        where: { id: Number(el) },
      }
    );
  });
  res.send("끝");
});

module.exports = router;
