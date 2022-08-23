// scroll evnet
let scrollx = 0;
let mouseMove = true;
const mainContent = document.querySelector("#mainContent");
// 가로로 스크롤 이동
mainContent.onscroll = function (e) {
  console.log(mainContent.style.top);
  scrollx += 10;
  console.log(mainContent.scrollY);
  console.log(window.scrollY);
  //   mainContent.scrollTo(scrollx, 3);
  console.log("이동");
};
