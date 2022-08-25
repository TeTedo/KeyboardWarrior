//readURL function
function readURL(input, callback) {
  if (input.files[0]) {
    const reader = new FileReader();

    //파일 읽기 성공했을때마다 실행
    reader.onload = function (e) {
      //큰 화면에 이미지 띄우기
      document.querySelector("#posting_left > img").src = e.target.result;

      //미리보기에 태그 추가
      const preImg = document.querySelector("#posting_right_imagePreview");
      preImg.innerHTML += `
      <img src = ${e.target.result}>
      `;
      callback();
    };

    // file 읽어오기
    reader.readAsDataURL(input.files[0]);
  } else {
    document.querySelector("#posting_left > img").src = "";
  }
}

function clickPreImg() {
  const imgPreview = document.querySelectorAll(
    "#posting_right_imagePreview > img"
  );

  imgPreview.forEach((el) => {
    el.onclick = function () {
      document.querySelector("#posting_left > img").src = el.src;

      // el.src는 (data:*/*;base64, base64로 인코딩된 코드) 형식으로 되있다.
      imgData.push(el.src);
    };
  });
}

//함수 실행 부분
document.querySelector("input[type=file]").onchange = function () {
  readURL(this, clickPreImg);
};

//데이터 베이스에 보내기
const imgData = [];
document.querySelector("#sumbit").onclick = function () {
  console.log(imgData);
  console.log("확인");
  const textData = document.querySelector("#posting_right > textarea").value;
  $.ajax({
    type: "post",
    url: "/posting",
    data: {
      img: imgData,
      text: textData,
    },
  });
};
