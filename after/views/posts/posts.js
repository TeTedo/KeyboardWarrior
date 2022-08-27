// 댓글클릭하면 댓글창 display 설정
document.querySelector("#posting_right_bottom_postingBtn > div").onclick =
  function () {
    document.querySelector(".posts_comment").classList.toggle("toggle_show");
  };
