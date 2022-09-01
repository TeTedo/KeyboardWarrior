const multer = require("multer");
const path = require("path");

const imgUpload = multer({
    storage: multer.diskStorage({
        //파일이 저장될 경로
        destination(req, file, callback) {
            // callback 매개변수 : error | null , 경로
            callback(null, "views/uploadsImg/community/");
        },
        filename(req, file, callback) {
            // 파일 확장자
            const ext = path.extname(file.originalname);
            // 현재시간
            const timestamp = new Date().getTime().valueOf();
            // 새 파일명(기존 파일명 + 시간 + 확장자) => 파일 중복을 막기 위함
            const filename =
                path.basename(file.originalname, ext) + timestamp + ext;
            // callback 매개변수 : error | null , 파일 이름
            callback(null, filename);
        },
    }),
});

module.exports = imgUpload;
