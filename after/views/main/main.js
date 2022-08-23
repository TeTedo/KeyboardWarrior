// scroll evnet
let scrollx = 0;
let mouseMove = true;
const mainContentWrap = document.querySelector("#mainContentWrap");
mainContentWrap.style.left += 0;
// 가로로 스크롤 이동
mainContentWrap.onwheel = function (e) {
  const mainPost = document.querySelectorAll("#mainPost");
  if (parseInt(mainContentWrap.style.left) > 0) {
    mainContentWrap.style.left = "0px";
    return;
  }
  if (parseInt(mainContentWrap.style.left) < -(mainPost.length - 3) * 330) {
    mainContentWrap.style.left = -(mainPost.length - 3) * 330 + "px";
    return;
  }
  //아래로 스크롤인 경우
  if (e.deltaY > 0) {
    mainContentWrap.style.left =
      parseInt(mainContentWrap.style.left) - 30 + "px";
  }
  //위로 스크롤인경우
  else {
    mainContentWrap.style.left =
      parseInt(mainContentWrap.style.left) + 30 + "px";
  }
  console.log(mainContentWrap.style.left);
};
