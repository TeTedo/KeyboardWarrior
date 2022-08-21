// crypto 모듈 필요로함
const crypto = require("crypto");

// salt값 생성 함수
function createSalt() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        resolve(buf.toString("base64"));
      }
    });
  });
}

// 해싱+암호화 결합한 비밀번호 생성 함수(비밀번호랑 솔트값 붙여서 같이해싱해버림)
function CreateHashedPw(password) {
  return new Promise(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(password, salt, 1000, 64, "sha512");
  });
}

const pwFunctions = {
  CreateHashedPw,
};

module.exports = pwFunctions;
