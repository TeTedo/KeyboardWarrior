const express = require("express");
const router = express.Router();
const getUserInfo = require("../functions/getUserInfo");
const { MainPost } = require("../model");
router.get(
  "/",
  async (req, res, next) => {
    // 로그인성공시
    if (req.session.login) {
      console.log("로그인 되어있는상태로 홈페이지 열었다.");
      //로그인한 유저 정보
      const { user_id, nick_name, profile_img } = await getUserInfo(req, res);

      //게시글 정보
      let writerInfos = {};
      async function getData() {
        await MainPost.findAll({
          raw: true,
        }).then((result) => {
          if (result) {
            for (let i = 0; i < result.length; i++) {
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
      res.render("main/main", { user_id, nick_name, profile_img, postData });
    } else {
      next();
    }
  },
  async (req, res) => {
    // 게시글들 정보 받아오기

    //게시글 정보
    let writerInfos = {};
    async function getData() {
      await MainPost.findAll({
        raw: true,
      }).then((result) => {
        if (result) {
          for (let i = 0; i < result.length; i++) {
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
      postData,
    });
  }
);

module.exports = router;
