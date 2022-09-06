const express = require("express");
const router = express.Router();
const {
  MainPost,
  MainComment,
  MainPostLike,
  Follow,
  User,
  Chat,
} = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const loginCheck = require("../middleware/loginCheck");

router.get("/posts/:postId", loginCheck, async (req, res) => {
  const post_id = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: post_id },
    raw: true,
  });
  let {
    user_id,
    nick_name,
    profile_img,
    follower: user_follower,
    following: user_following,
  } = await getUserInfo(req, res);
  profile_img = "../" + profile_img;
  const commentData = await MainComment.findAll({
    where: { post_id },
    raw: true,
  });
  const likeData = await MainPostLike.findOne({
    where: { post_id, user_id },
  });

  //팔로잉 팔로우 데이터 넘기기
  // 작성자 팔로워, 팔로잉 수 넘기기
  const { follower, following } = await User.findOne({
    where: { user_id: postData.user_id },
  });
  // 들어온 유저가 작성자를 팔로우했는지 확인하기 위함
  let following_id;
  let follower_id;
  await Follow.findOne({
    where: { follower_id: user_id, following_id: postData.user_id },
    raw: true,
  })
    .then((result) => {
      if (result) {
        following_id = result.following_id;
        follower_id = result.follower_id;
      } else {
        following_id = "";
        follower_id = "";
      }
    })
    .catch((err) => {
      following_id = "";
      follower_id = "";
    });

  let chatObj = [];
  //채팅 정보 받아오기
  // for of 문으로 한 이유 : forEach에서 await를 안기다림, 외래키에서 원하는값 불러오기 실패
  await Chat.findAll({
    where: { speaker: user_id },
    raw: true,
    attributes: ["listener", "message", "createdAt"],
  }).then(async (result) => {
    for (const value of result) {
      await User.findOne({
        where: { user_id: value.listener },
        attributes: ["profile_img", "nick_name"],
        raw: true,
      }).then((data) => {
        value.profile_img = "../" + data.profile_img;
        value.nick_name = data.nick_name;
        chatObj.push(value);
      });
    }
  });

  await Chat.findAll({
    where: { listener: user_id },
    raw: true,
    attributes: ["speaker", "message", "createdAt"],
  }).then(async (result) => {
    for (const value of result) {
      await User.findOne({
        where: { user_id: value.speaker },
        attributes: ["profile_img", "nick_name"],
        raw: true,
      }).then((data) => {
        value.profile_img = "../" + data.profile_img;
        value.nick_name = data.nick_name;
        chatObj.push(value);
      });
    }
  });

  chatObj.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  res.render("posts/posts", {
    user_id,
    nick_name,
    profile_img,
    postData,
    commentData,
    likeData,
    following_id,
    follower_id,
    follower,
    following,
    user_follower,
    user_following,
    chatObj,
  });
});

module.exports = router;
