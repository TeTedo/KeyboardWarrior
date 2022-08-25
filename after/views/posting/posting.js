//readURL function
function readURL(input) {
  if (input.files[0]) {
    const reader = new FileReader();
    //파일 읽기 성공했을때마다 실행
    reader.onload = function (e) {
      document.querySelector("#posting_left > img").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.querySelector("#posting_left > img").src = "";
  }
}
