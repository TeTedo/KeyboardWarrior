// 외부모듈
const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// 서버열기
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트에 서버열림`);
});

// DB연결 (db객체에서 sequelize만 빼옴)
const { sequelize } = require("../model");
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB연결됨");
  })
  .catch((err) => {
    console.log("DB에러");
    console.log(err);
  });

// 여기서 sequelize만 빼왔는데 User 테이블 정보를 어케알고 생성하는거지??
// model에 index.js에서 init매서드 실행시키면 sequelize안에 정보가 담기는건가?
// User 테이블은 model폴더 users.js에 있는 생성코드를 index.js에서 init으로 실행시켜줌 -> 그래서 생성됨

//업로드 이미지 폴더 없으면 생성
fs.readdir("views/uploadsImg", (err) => {
  if (err) {
    fs.mkdirSync("views/uploadsImg");
  }
});

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    // store: new FileStore(),
  })
);

// 뷰엔진 설정
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// 바디퍼서
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 사용할 정적폴더
app.use(express.static("views"));

//모든곳에서 loginStatus 미들웨어 사용
const loginStatus = require("../middleware/loginStatus");
// const loginCheck = require("../middleware/loginCheck");
app.use(loginStatus);

// 라우터
const login = require("../router/login");
const join = require("../router/join");
const main = require("../router/main");
const community_hub = require("../router/community_hub");
const community = require("../router/community");
const minigame = require("../router/minigame");
const posting = require("../router/posting");
const posts = require("../router/posts");
const logout = require("../router/logout");
const communityPosting = require("../router/communityPosting");
const communityPost = require("../router/communityPost");
const postsModify = require("../router/postsModify");
const joinModify = require("../router/joinModify");
const joinModifyEntarance = require("../router/joinModifyEnterance");
app.use(
  login,
  logout,
  join,
  main,
  minigame,
  posting,
  posts,
  community_hub,
  community,
  communityPosting,
  communityPost,
  postsModify,
  joinModify,
  joinModifyEntarance
);

// 서버열기
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트에 서버열림`);
});
