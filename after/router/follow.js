const express = require("express");
const router = express.Router();
const { Follow, User } = require("../model");
const getUserInfo = require("../functions/getUserInfo");

router.post("/follow", async (req, res) => {
  const { follow, follower, following } = req.body;
  const { following: followingNum } = await getUserInfo(req, res);
  const { follower: followerNum } = await User.findOne({
    where: { user_id: following },
  });
  if (follow == "true") {
    Follow.create({
      following_id: following,
      follower_id: follower,
    });
    // 팔로우하는사람(로그인되어있는 유저)에서 팔로잉 숫자 +1
    User.update(
      {
        following: followingNum + 1,
      },
      {
        where: { user_id: follower },
      }
    );
    // 팔로우당하는사람(following) 팔로워 숫자 +1
    User.update(
      {
        follower: followerNum + 1,
      },
      {
        where: { user_id: following },
      }
    );
  } else {
    Follow.destroy({
      where: { following_id: following, follower_id: follower },
    });
    //팔로우하는사람(로그인되어있는 유저)에서 팔로잉 숫자 -1
    User.update(
      {
        following: followingNum - 1,
      },
      {
        where: { user_id: follower },
      }
    );
    // 팔로우당하는사람(following) 팔로워 숫자 -1
    User.update(
      {
        follower: followerNum - 1,
      },
      {
        where: { user_id: following },
      }
    );
  }
});

module.exports = router;
