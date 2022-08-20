// 외부모듈
const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.urlencoded({ extended: false }));

// 서버열기
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT}번 포트에 서버열림`);
});

// 뷰엔진 설정
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// 사용할 정적폴더
app.use(express.static(__dirname));
app.use(express.static("views"));

// 라우터
const login = require("../router/login");
const join = require("../router/join");
app.use(login, join);

// DB연결 (db객체에서 sequelize만 빼옴)
const { sequelize } = require("../model");
sequelize
    .sync({ force: false })
    .then(() => {
        console.log("DB연결됨");
    })
    .catch(err => {
        console.log(err);
    });
// 여기서 sequelize만 빼왔는데 User 테이블 저오를 어케알고 생성하는거지??
// model에 index.js에서 init매서드 실행시키면 sequelize안에 정보가 담기는건가?
