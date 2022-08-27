const { MainPost } = require("../model");
const writerInfos = [];

function getData() {
  MainPost.findAll({}).then((result) => {
    for (let i = 0; i < result.length; i++) {
      const writer = result[i].dataValues.user_id;
      const writer_nickName = result[i].dataValues.nick_name;
      const writer_like = result[i].dataValues.like;
      const writer_comment = result[i].dataValues.comment;
      const writer_text = result[i].dataValues.text;
      const writer_image1 = result[i].dataValues.image1;
      const writer_image2 = result[i].dataValues.image2;
      const writer_image3 = result[i].dataValues.image3;
      const writer_image4 = result[i].dataValues.image4;
      const writer_image5 = result[i].dataValues.image5;
      const writer_created_at = result[i].dataValues.createdAt;

      writerInfos.push({
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
      });
    }
  });
}

const getMainPostInfo = new Promise((resolve, reject) => {
  getData();
  resolve(writerInfos);
});

module.exports = getMainPostInfo;
