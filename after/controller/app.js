const express = require("express");
const app = express();
const PORT = 3000;
const ejs = require("ejs");

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에 서버열림`);
});

// 뷰엔진 설정
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// 사용할 정적폴더
app.use(express.static(__dirname));
app.use(express.static("views"));

// import 부분
const login = require("../router/login.js");
const join = require("../router/join.js");
app.use(login, join);
