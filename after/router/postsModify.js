const express = require("express");
const router = express.Router();
const { MainPost, Chat, User } = require("../model");
const getUserInfo = require("../functions/getUserInfo");
const imgUpload = require("../middleware/imgUpload");
const fs = require("fs");
const path = require("path");

router.get("/posts/:postId/modify", async (req, res) => {
  let { user_id, nick_name, profile_img, follower, following } =
    await getUserInfo(req, res);
  const postId = req.params.postId;
  const postData = await MainPost.findOne({
    where: { id: postId },
    raw: true,
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
        value.profile_img = "../../" + data.profile_img;
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
        value.profile_img = "../../" + data.profile_img;
        value.nick_name = data.nick_name;
        chatObj.push(value);
      });
    }
  });

  chatObj.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  profile_img = "../../" + profile_img;

  // 로그인 유저와 글 작성자 비교
  if (postData.user_id !== user_id) {
    res.redirect("/");
  }
  //정상 수정 구간
  else {
    res.render("postsModify/postsModify", {
      user_id,
      nick_name,
      postData,
      profile_img,
      chatObj,
      follower,
      following,
    });
  }
});

router.post(
  "/posts/:postId/modify",
  imgUpload.fields([
    { name: "files1" },
    { name: "files2" },
    { name: "files3" },
    { name: "files4" },
    { name: "files5" },
  ]),
  (req, res) => {
    const postId = req.params.postId;
    let { text, imgUpdate, imgDelete } = req.body;
    let totalFiles = req.files;

    // // 삭제파일 서버에서 삭제
    // if (imgDelete) {
    //   imgDelete = imgDelete.split("existImageValue");
    //   console.log(imgDelete[1]);
    //   console.log(path.resolve(imgDelete[1]));
    //   console.log(path.dirname(path.resolve(imgDelete[1])));
    //   for (let i = 1; i < imgDelete.length; i++) {
    //     if (fs.existsSync(path.resolve(imgDelete[i]))) {
    //       fs.unlink(path.resolve(imgDelete[i]), (err) => {
    //         console.log("파일삭제 실패");
    //         console.log(err);
    //       });
    //     }
    //   }
    // }

    // 기존에 있던 파일들 가공 => 불러온 파일들 객체에 추가하고 sort해서 순서 정렬
    imgUpdate = imgUpdate.split("existImageValue");
    for (let i = 1; i < imgUpdate.length; i++) {
      const existValue = imgUpdate[i];
      if (!totalFiles[`files${i}`]) {
        totalFiles[`files${i}`] = [
          { fieldname: `files${i}`, path: existValue },
        ];
      }
    }
    let files = Object.values(totalFiles);
    files = files.sort((a, b) => {
      return (
        a[0].fieldname.replace("files", "") -
        b[0].fieldname.replace("files", "")
      );
    });

    //이미지가 없는자리는 null로 표시되게끔 설정
    for (let i = files.length; i < 5; i++) {
      files[i] = [{ path: null }];
    }

    //path 바꿔주기
    for (let i = 0; i < 5; i++) {
      if (files[i][0].path) {
        const test = files[i][0].path;
        files[i][0].path = test.replace("views\\", "");
        files[i][0].path = files[i][0].path.replace("views/", "");
      }
    }

    MainPost.update(
      {
        image1: files[0][0].path,
        image2: files[1][0].path,
        image3: files[2][0].path,
        image4: files[3][0].path,
        image5: files[4][0].path,
      },
      { where: { id: postId } }
    );

    res.redirect("/");
  }
);

router.post("/textarea/modify", async (req, res) => {
  const { textValue, post_id } = req.body;
  await MainPost.update(
    {
      text: textValue,
    },
    {
      where: {
        id: post_id,
      },
    }
  );
});

module.exports = router;
