const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

function getUserId(req, res) {
  const { refresh_token } = req.session;
  const userId = jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN,
    (err, ref_decoded) => {
      return ref_decoded.userId;
    }
  );

  return userId;
}

module.exports = getUserId;
