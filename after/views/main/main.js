// scroll evnet
let scrollx = 0;
let mouseMove = true;
const mainContent = document.querySelector("#mainContent");

// 가로로 스크롤 이동
mainContent.onwheel = function (e) {
  const mainPost = document.querySelectorAll("#mainPost");
  const maxScroll = (mainPost.length - 3) * 330;
  scrollx = scrollx < 0 ? 0 : scrollx > maxScroll ? maxScroll : scrollx;
  //아래로 스크롤인 경우
  if (e.deltaY > 0) {
    scrollx += 30;
  }
  //위로 스크롤인경우
  else {
    scrollx -= 30;
  }
  mainContent.scrollTo(scrollx, 0);
};
