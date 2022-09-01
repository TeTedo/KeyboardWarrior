const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();
const { User } = require("../model");
let user_id;

//user_id 찾기
const getUserId = function (req, res) {
  const { refresh_token } = req.session;
  user_id = jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN,
    (err, ref_decoded) => {
      return ref_decoded.userId;
    }
  );
};

async function getUserInfo(req, res) {
  getUserId(req, res);

  const {
    name,
    nick_name,
    mobile_number,
    email,
    profile_img,
    follower,
    following,
    createdAt,
    updatedAt,
  } = await User.findOne({
    where: { user_id },
  });

  return {
    user_id,
    name,
    nick_name,
    mobile_number,
    email,
    profile_img,
    follower,
    following,
    createdAt,
    updatedAt,
  };
}

module.exports = getUserInfo;
