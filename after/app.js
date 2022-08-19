const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에 서버열림`);
});

app.use(express.static(__dirname));
const loginNode = require("./login/loginServer.js");
const joinNode = require("./join/joinServer");
app.use(loginNode, joinNode);
