window.onload = () => {
    // scroll evnet
    let scrollx = 0;
    // 가로로 스크롤 이동
    const contentsWrap = document.querySelector("#contentsWrap");
    contentsWrap.onwheel = function (e) {
        window.onwheel = null;
        const mainContent = document.querySelector("#mainContent");
        const mainContentWrap = document.querySelector("#mainContentWrap");

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
        offAnimation();
        mainContent.scrollTo(scrollx, 0);
    };

    // 스크롤헬퍼 이벤트 (스크롤대상 돔 contentsWrap으로 바꿔주기)
    const scrollHelper = document.querySelector("#scrollHelper");
    const scrollHelperText = document.querySelector("#scrollHelper_text");
    const scrollHelperIcon = document.querySelector("#scrollHelper_icon");
    const body = document.querySelector("body");
    function offAnimation() {
        scrollHelper.classList.remove("active");
        scrollHelperText.classList.remove("active");
        scrollHelperIcon.classList.remove("active");
    } // 이거 스크롤기능에도 넣어줘야함(스크롤하면 꺼지게)
    contentsWrap.onmouseenter = () => {
        const mainPosts = document.querySelectorAll(".mainPost");
        if (mainPosts.length > 3) {
            body.classList.add("block"); // 작은화면에서 슬라이드할때 윈도우 스크롤 막기용
            scrollHelper.classList.add("active");
            scrollHelperText.classList.add("active");
            scrollHelperIcon.classList.add("active");
        }
    };
    contentsWrap.onmouseleave = () => {
        body.classList.remove("block");
        offAnimation();
    };
    contentsWrap.onclick = () => offAnimation();
};
