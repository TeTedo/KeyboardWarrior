const express = require("express");
const router = express.Router();

router.post("/posts/:postId/comment", (req, res) => {
  const postId = req.params.postId;
});
