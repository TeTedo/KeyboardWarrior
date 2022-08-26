const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

function getUserInfo(req, res) {
  const { refresh_token } = req.session;
  const user_id = jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN,
    (err, ref_decoded) => {
      return ref_decoded.userId;
    }
  );

  return {
    user_id,
  };
}

module.exports = getUserInfo;
