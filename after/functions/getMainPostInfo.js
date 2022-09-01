// // 테이블 없으면 터짐 => function을 call stack에 먼저 집어넣어서 테이블 생성전에 넣어서 그런가? 잘모르겠음

// //테이블없을때 터짐방지
// const { MainPost, sequelize } = require("../model");
// MainPost.init(sequelize);

// let writerInfos = {};
// async function getData() {
//   await MainPost.findAll({
//     raw: true,
//   }).then((result) => {
//     if (result) {
//       for (let i = 0; i < result.length; i++) {
//         const write_id = result[i].id;
//         const writer = result[i].user_id;
//         const writer_nickName = result[i].nick_name;
//         const writer_like = result[i].like;
//         const writer_comment = result[i].comment;
//         const writer_text = result[i].text;
//         const writer_image1 = result[i].image1;
//         const writer_image2 = result[i].image2;
//         const writer_image3 = result[i].image3;
//         const writer_image4 = result[i].image4;
//         const writer_image5 = result[i].image5;
//         const writer_created_at = result[i].createdAt;

//         writerInfos[write_id] = {
//           writer,
//           writer_nickName,
//           writer_like,
//           writer_comment,
//           writer_text,
//           writer_image1,
//           writer_image2,
//           writer_image3,
//           writer_image4,
//           writer_image5,
//           writer_created_at,
//         };
//       }
//     } else {
//       //DB에 아무것도 없을때
//       return (writerInfos = null);
//     }
//   });
// }
// async function getMainPostInfo() {
//   await new Promise((resolve, reject) => {
//     resolve(getData());
//   });
//   return writerInfos;
// }

// module.exports = getMainPostInfo;
