const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost, Follow, User, MainPostLike, Chat } = require("../model");
router.get(
  "/",
  async (req, res, next) => {
    // 로그인성공시
    if (req.session.login) {
      console.log("로그인 되어있는상태로 홈페이지 열었다.");
      //로그인한 유저 정보
      const { user_id, nick_name, profile_img, follower, following } =
        await getUserInfo(req, res);
      //게시글 정보
      let writerInfos = {};
      async function getData() {
        await MainPost.findAll({
          raw: true,
        }).then(async (result) => {
          if (result) {
            for (let i = 0; i < result.length; i++) {
              //로그인한 유저가 해당 게시글을 좋아요했는지 구별하기 위해서
              const userLike = await MainPostLike.findOne({
                where: { post_id: result[i].id, user_id },
              });
              //로그인한 유저와 작성자를 follow 데이터베이스에 검색
              const follow = await Follow.findOne({
                where: {
                  follower_id: user_id,
                  following_id: result[i].user_id,
                },
                raw: true,
              });
              // 작성자의 팔로워 숫자 받아오기
              const writer_follower = await User.findOne({
                where: { user_id: result[i].user_id },
                raw: true,
              }).then((result) => {
                return result.follower;
              });

              const writer_profile_img = result[i].profile_img;
              const write_id = result[i].id;
              const writer = result[i].user_id;
              const writer_nickName = result[i].nick_name;
              const writer_like = result[i].like;
              const writer_comment = result[i].comment;
              const writer_text = result[i].text;
              const writer_image1 = result[i].image1;
              const writer_image2 = result[i].image2;
              const writer_image3 = result[i].image3;
              const writer_image4 = result[i].image4;
              const writer_image5 = result[i].image5;
              const writer_created_at = result[i].createdAt;

              writerInfos[write_id] = {
                userLike,
                writer_follower,
                follow,
                writer_profile_img,
                writer,
                writer_nickName,
                writer_like,
                writer_comment,
                writer_text,
                writer_image1,
                writer_image2,
                writer_image3,
                writer_image4,
                writer_image5,
                writer_created_at,
              };
            }
          } else {
            //DB에 아무것도 없을때
            return (writerInfos = null);
          }
        });
      }
      async function getMainPostInfo() {
        await new Promise((resolve, reject) => {
          resolve(getData());
        });
        return writerInfos;
      }

      // 게시글들 정보 받아오기
      const postData = await getMainPostInfo();
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
            value.profile_img = data.profile_img;
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
            value.profile_img = data.profile_img;
            value.nick_name = data.nick_name;
            chatObj.push(value);
          });
        }
      });

      chatObj.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });

      res.render("main/main", {
        user_id,
        nick_name,
        profile_img,
        follower,
        following,
        postData,
        chatObj,
      });
    } else {
      next();
    }
  },
  //로그인 안되있을때 실행시키는 곳
  async (req, res) => {
    // 게시글들 정보 받아오기

    //게시글 정보
    let writerInfos = {};
    async function getData() {
      await MainPost.findAll({
        raw: true,
      }).then(async (result) => {
        if (result) {
          for (let i = 0; i < result.length; i++) {
            const writer_follower = await User.findOne({
              where: { user_id: result[i].user_id },
              raw: true,
            }).then((result) => {
              return result.follower;
            });
            const userLike = null;
            const follow = null;
            const writer_profile_img = result[i].profile_img;
            const write_id = result[i].id;
            const writer = result[i].user_id;
            const writer_nickName = result[i].nick_name;
            const writer_like = result[i].like;
            const writer_comment = result[i].comment;
            const writer_text = result[i].text;
            const writer_image1 = result[i].image1;
            const writer_image2 = result[i].image2;
            const writer_image3 = result[i].image3;
            const writer_image4 = result[i].image4;
            const writer_image5 = result[i].image5;
            const writer_created_at = result[i].createdAt;

            writerInfos[write_id] = {
              userLike,
              writer_follower,
              follow,
              writer_profile_img,
              writer,
              writer_nickName,
              writer_like,
              writer_comment,
              writer_text,
              writer_image1,
              writer_image2,
              writer_image3,
              writer_image4,
              writer_image5,
              writer_created_at,
            };
          }
        } else {
          //DB에 아무것도 없을때
          return (writerInfos = null);
        }
      });
    }
    async function getMainPostInfo() {
      await new Promise((resolve, reject) => {
        resolve(getData());
      });
      return writerInfos;
    }

    const postData = await getMainPostInfo();

    res.render("main/main", {
      user_id: "",
      nick_name: "",
      profile_img: "",
      follower: "",
      following: "",
      postData,
      chatObj: "",
    });
  }
);

module.exports = router;
