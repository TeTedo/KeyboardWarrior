//readURL function
function readURL(input, callback) {
  if (input.files[0]) {
    // 파일 읽고 미리보기 띄우기 위함
    const reader = new FileReader();
    // 파일을 uploadsImg 폴더에 저장하기 위함
    const formData = new FormData();
    //key - value 구조 :  selectImg 라는 키값으로 input.files[0]라는 value를 formData에 추가 -> imgUpload 미들웨어의 매개변수로 키값을 넣어줘야 한다.
    formData.append("selectImg", input.files[0]);
    console.log(input.files[0]);
    console.log(formData);
    //파일 읽기 성공했을때마다 실행
    reader.onload = function (e) {
      //큰 화면에 이미지 띄우기
      document.querySelector("#posting_left > img").src = e.target.result;

      //미리보기에 태그 추가
      const preImg = document.querySelector("#posting_right_imagePreview");
      preImg.innerHTML += `
      <img src = ${e.target.result}>
      `;
      imgDataArr.push(e.target.result);
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
      // el.src는 (data:*/*;base64, base64로 인코딩된 코드) 형식으로 되있다.
      document.querySelector("#posting_left > img").src = el.src;
    };
  });
}

//함수 실행 부분
document.querySelector("input[type=file]").onchange = function () {
  readURL(this, clickPreImg);
};

//데이터 베이스에 보내기
const imgDataArr = [];
document.querySelector("#posting").onsubmit = function () {
  const textData = document.querySelector("#posting_right > textarea").value;
  const imgType = [];
  const imgBaseCode = [];
  // 파일 확장자명과 base64코드 분리
  imgDataArr.forEach((el) => {
    const temp = el
      .split(/data:image\//)
      .join("")
      .split(/;base64,/);

    imgType.push(temp[0]);
    imgBaseCode.push(temp[1]);
  }),
    console.log(imgType);
  console.log(imgBaseCode);
  $.ajax({
    type: "post",
    url: "/posting",
    data: {
      img: {
        type: imgType,
        baseCode: imgBaseCode,
      },
      text: textData,
    },
  });
};
