const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

//로그인 상태인지 확인하는 함수
const loginStatus = (req, res, next) => {
  const { access_token, refresh_token } = req.session;

  jwt.verify(access_token, process.env.ACCSESS_TOKEN, (err, acc_decoded) => {
    // access_token expired
    if (err) {
      console.log("썩은토큰");
      // 에러페이지로 이동
      //   res.redirect("/err");
      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN,
        (error, ref_decoded) => {
          console.log(ref_decoded);
          if (error) {
            // 로그인 만료
            console.log("로그인 안되있음");
            req.session.login = false;

            next();
          } else {
            // accesstoken 다시 만들기
            const accessToken = jwt.sign(
              {
                alg: ref_decoded.alg,
                typ: ref_decoded.typ,
                userId: ref_decoded.userId,
              },
              process.env.ACCSESS_TOKEN,
              {
                expiresIn: "10m",
              }
            );

            req.session.access_token = accessToken;
            console.log("토큰 교체 완료");
            next();
          }
        }
      );
    } else {
      console.log("정상 로그인");
      req.session.login = true;
      // pass middleware
      next();
    }
  });
};

module.exports = loginStatus;
