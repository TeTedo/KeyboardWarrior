const getUserInfo = require("../functions/getUserInfo");

async function checkSameUser(req, res, next) {
  const { user_id } = await getUserInfo(req, res);
  const postId = req.params.postId;
  if (user_id !== postId) {
    res.redirect("/");
  } else {
    next();
  }
}

module.exports = checkSameUser;
