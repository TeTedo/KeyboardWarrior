const express = require("express");
const router = express.Router();
const loginCheck = require("../middleware/loginCheck");
router.get("/community/:game_name", loginCheck, (req, res) => {
  const gameName = req.params.game_name;
  let data = {};
  res.render("community/community", { gameName });

  // switch (gameName) {
  //     case "fifa":
  //         data = {
  //             gameName,
  //             title: "피파온라인 4",
  //         };
  //         res.render("community/community", { data });
  //         break;
  //     case "maple":
  //         data = {
  //             gameName,
  //             title: "메이플스토리",
  //         };
  //         res.render("community/community", { data });
  //         break;
  //     case "riniji":
  //         data = {
  //             gameName,
  //             title: "리니지",
  //         };
  //         res.render("community/community", { data });
  //         break;
  //     default:
  //         res.redirect("community_hub/community_hub");
  //         break;
  // }
});

module.exports = router;
