// 사이드바 접기
const closeSideBar = document.querySelector(".fa-arrow-left-long");
const openSideBar = document.querySelector(".fa-arrow-right-long");
const sideBar = document.querySelector("#sideBar");
closeSideBar.onclick = function () {
  sideBar.style.transform = "translate(-450px)";
  openSideBar.style.display = "block";
};
openSideBar.onclick = function () {
  sideBar.style.transform = "translate(0)";
};
// scroll evnet
let scrollx = 0;
// 가로로 스크롤 이동
const mainContentWrap = document.querySelector("#mainContentWrap");
mainContentWrap.onwheel = function (e) {
  const mainContent = document.querySelector("#mainContent");
  const maxScroll = mainContentWrap.offsetWidth - mainContent.offsetWidth;
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
