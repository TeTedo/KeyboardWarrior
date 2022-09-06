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
