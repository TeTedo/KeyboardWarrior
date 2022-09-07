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
const contentsWrap = document.querySelector("#contentsWrap");
const mainContentWrap = document.querySelector("#mainContentWrap");
contentsWrap.onwheel = function (e) {
  window.onwheel = null;
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

// 검색기능
function Debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait); //얘가 시간지나면 timeout을 0(false)로 만들어줌
    if (callNow) func.apply(context, args);
  };
}

function search(e) {
  const searchedValue = e.target.value;
  postData = postData.filter((post) => {
    const postText = post.text;
    const joinedValue = post.hashtag_values.join(",");
    const nickName = post.User.nick_name;
    return (
      postText.includes(searchedValue) ||
      joinedValue.includes(searchedValue) ||
      nickName.includes(searchedValue)
    );
  });
  if (postData.length == 0) {
    mainContentWrap.innerHTML = `
        <div class="mainPost">
            <div class="noSearchedPostCaution"> 검색결과 없음 </div>
        </div>
        `;
    uploadData();
    return;
  }
  let postHtml = "";
  postData.forEach((filteredPost) => {
    let hashtagHtml = "";
    filteredPost.hashtag_values.forEach((hashtag) => {
      // 해시태그내에 검색된글자 배경색 변경
      if (hashtag.includes(searchedValue)) {
        const reg = new RegExp(searchedValue, "i");
        hashtag = hashtag.replace(
          reg,
          `<span class="searched_character">${searchedValue}</span>`
        );
      }
      hashtagHtml += `
            <span id="hashTag_Wrap">
                        <span class="hashTag_Box" onclick="update(this)">
                            ${hashtag}
                        </span>
                    </span>
            `;
    });
    // 텍스트내에 검색된글자 배경색 변경
    if (filteredPost.text.includes(searchedValue)) {
      const reg = new RegExp(searchedValue, "i");
      filteredPost.text = filteredPost.text.replace(
        reg,
        `<span class="searched_character">${searchedValue}</span>`
      );
    }
    // 닉네임내에 검색된글자 배경색 변경
    if (filteredPost.User.nick_name.includes(searchedValue)) {
      const reg = new RegExp(searchedValue, "i");
      filteredPost.User.nick_name = filteredPost.User.nick_name.replace(
        reg,
        `<span class="searched_character">${searchedValue}</span>`
      );
    }
    // 사진있으면 사진 없으면 글자
    const contentsHtml = filteredPost.image1
      ? `<img
        id="mainPost_middle_img"
        src="../${filteredPost.image1}"
        alt=""
        />`
      : `<div id="mainPost_middle_text">${filteredPost.text}</div>`;

    postHtml += `
        <div
            class="mainPost"
            name=post${filteredPost.id}
            data-userid=${filteredPost.user_id}
        >
            <div id="mainPost_top">
                <div id="mainPost_top_profileimg">
                <a href="/profile/${filteredPost.user_id}"
                ><img src="../${filteredPost.User.profile_img}" alt="프로필이미지공간" /></a>
                </div>      
                <div id="mainPost_top_userInfo">
                    <div id="mainPost_top_userInfo_nickName">${filteredPost.User.nick_name}</div>
                    <div id="mainPost_top_userInfo_follwer">
                        <i class="fa-solid fa-user-group"></i>
                        <span class="followerAmount">${filteredPost.User.follower}</span>
                    </div>
                </div>
                <div id="mainPost_top_follwingBtn">
                    <i class="fa-solid fa-user-plus" onclick="updateFollow(this)"></i>
                    <i class="fa-solid fa-user-check" onclick="updateFollow(this)"></i>
                    <i class="fa-solid fa-message"></i>
                    <a href="/community/${filteredPost.id}/modify">수정하기</a>
                </div>
            </div>
            <div id="mainPost_middle" 
            data-post_id=${filteredPost.id}
            onclick="{changeToPost(this)}"
            > ${contentsHtml}
            </div>
            <div id="mainPost_bottom">
                <span>#</span>
                ${hashtagHtml}
                <div id="mainPost_bottom_createdTime">${filteredPost.createdAt}</div>
                <div id="mainPost_bottom_sub">
                    <i class="fa-solid fa-heart" onclick="updateLike(this)"></i>
                    <span class="likeAmount">${filteredPost.like}</span>
                    <i class="fa-solid fa-comment"></i>
                    <span class="commentAmount">${filteredPost.comment}</span>
                </div>
            </div>
        </div>
        `;
  });
  mainContentWrap.innerHTML = postHtml;
  makeModifyBtn();
  checkIsLiked();
  checkIsFollow();
  uploadData();
}
searchBar_input.addEventListener("input", Debounce(search, 100, false));
// 해시태그 클릭시 필터 기능
function update(target) {
  searchBar_input.value = "";
  let isFiltered = false;
  let selectedOne = target.innerText;
  if (!target.classList.contains("active")) {
    postData = postData.filter((post) => {
      return post.hashtag_values.includes(selectedOne);
    });
    isFiltered = true;
  }
  let postHtml = "";
  postData.forEach((filteredPost) => {
    let hashtagHtml = "";
    filteredPost.hashtag_values.forEach((hashtag) => {
      hashtagHtml += `
            <span id="hashTag_Wrap">
                        <span class="hashTag_Box" onclick="update(this)">
                            ${hashtag}
                        </span>
                    </span>
            `;
    });

    // 사진있으면 사진 없으면 글자
    const contentsHtml = filteredPost.image1
      ? `<img
                id="mainPost_middle_img"
                src="../${filteredPost.image1}"
                alt=""
                />`
      : `<div id="mainPost_middle_text">${filteredPost.text}</div>`;

    postHtml += `
        <div
            class="mainPost"
            name="post${filteredPost.id}"
            data-userid=${filteredPost.user_id}
        >
            <div id="mainPost_top">
                <div id="mainPost_top_profileimg">
                <a href="/profile/${filteredPost.user_id}"
                ><img src="../${filteredPost.User.profile_img}" alt="프로필이미지공간" /></a>
                </div>      
                <div id="mainPost_top_userInfo">
                    <div id="mainPost_top_userInfo_nickName">${filteredPost.User.nick_name}</div>
                    <div id="mainPost_top_userInfo_follwer">
                        <i class="fa-solid fa-user-group"></i>
                        <span class="followerAmount">${filteredPost.User.follower}
                    </div>
                </div>
                <div id="mainPost_top_follwingBtn">
                    <i class="fa-solid fa-user-plus" onclick="updateFollow(this)"></i>
                    <i class="fa-solid fa-user-check" onclick="updateFollow(this)"></i>
                    <i class="fa-solid fa-message"></i>
                    <a href="/community/${filteredPost.id}/modify">수정하기</a>
                </div>
            </div>
            <div id="mainPost_middle"
            data-post_id=${filteredPost.id}
            onclick="{changeToPost(this)}"
            >
                ${contentsHtml}
            </div>
            <div id="mainPost_bottom">
                <span>#</span>
                ${hashtagHtml}
                <div id="mainPost_bottom_createdTime">${filteredPost.createdAt}</div>
                <div id="mainPost_bottom_sub">
                <i class="fa-solid fa-heart" onclick="updateLike(this)"></i>
                <span class="likeAmount">${filteredPost.like}</span>
                <i class="fa-solid fa-comment"></i>
                <span class="commentAmount">${filteredPost.comment}</span>
                </div>
            </div>
        </div>
        `;
  });
  mainContentWrap.innerHTML = postHtml;
  const hashTagBox = document.querySelectorAll(".hashTag_Box");
  // 선택된 해시태그 css효과
  if (isFiltered) {
    hashTagBox.forEach((box) => {
      if (box.innerText == selectedOne) {
        box.classList.add("active");
        box.parentNode.classList.add("active");
      }
    });
  }
  makeModifyBtn();
  // postData를 서버에서 받아온 데이터로 다시 초기화
  checkIsLiked();
  checkIsFollow();
  uploadData();
}
