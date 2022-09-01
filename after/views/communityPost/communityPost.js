// 댓글클릭하면 댓글창 display 설정
document.querySelector(
    "#posting_right_bottom_postingBtn div:nth-child(2)"
).onclick = function () {
    document.querySelector(".posts_comment").classList.toggle("toggle_show");
};

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
