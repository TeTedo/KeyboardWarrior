const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();
const { User } = require("../model/index");

function getUserInfo(req, res) {
  const { refresh_token } = req.session;
  const user_id = jwt.verify(
    refresh_token,
    process.env.REFRESH_TOKEN,
    (err, ref_decoded) => {
      return ref_decoded.userId;
    }
  );

  User.findOne({
    where: { user_id },
  }).then((result) => {
    const data = result.dataValues;
    console.log(data);
    const { name, nick_name, mobile_number, email, created_at, updated_at } =
      data;

    return {
      user_id,
      name,
      nick_name,
      mobile_number,
      email,
      created_at,
      updated_at,
    };
  });
}

module.exports = getUserInfo;
