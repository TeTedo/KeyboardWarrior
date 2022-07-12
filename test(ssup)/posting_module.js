//포스팅 작성 모듈
let postWritesArr = document.querySelectorAll(".postWrite");
let postWriteContentsArr = document.querySelectorAll(".postWriteContents");
let modifyTextareasArr = document.querySelectorAll(".modifyTextarea");
let postWriteContentsBtnsArr = document.querySelectorAll(
  ".postWriteContentsBtns"
);

let postWriteContentsImgWrappersArr = document.querySelectorAll(
  ".postWriteContentsImgWrapper"
);
let postWriteContentsImgBtnsArr = document.querySelectorAll(
  ".postWriteContentsImgBtn"
);

let modifyBtnsArr = document.querySelectorAll(".modifyBtn");
let deleteBtnsArr = document.querySelectorAll(".deleteBtn");
let modifyAddImgBtnsArr = document.querySelectorAll(".modifyAddImgBtn");
let CategoryinModify = document.querySelectorAll(".CategoryinModify");
let postWriteGameHashTag = document.querySelectorAll(".postWriteGameHashTag");
let postWriteHashTag = document.querySelectorAll(".postWriteHashTag");
let chooseCategoryinModify = document.querySelectorAll(
  ".chooseCategoryinModify"
);
let chooseGameinModify = document.querySelectorAll(".chooseGameinModify");

let postWriteGameTag = document.querySelectorAll(".postWriteGameTag");
let chooseGame = document.querySelector(".chooseGame");
let chooseCategory = document.querySelector(".chooseCategory");
// let imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')

let PostGnb = (function () {
  function PostGnb(super_id, text, imgUrlsArr) {
    this.init(super_id, text, imgUrlsArr);
  }
  PostGnb.prototype.init = function (super_id, text, imgUrlsArr) {
    if (super_id === "" || super_id === null) {
      return;
    }

    let postWrite = document.createElement("div");
    postWrite.classList.add("postWrite");
    let postWriteWrapper = document.createElement("span");
    postWriteWrapper.classList.add("postWriteWrapper");
    let profileImg = document.createElement("a");
    profileImg.classList.add("profileImg");
    let postWriteContents = document.createElement("span");
    postWriteContents.classList.add("postWriteContents");
    let postWriteContentsBtns = document.createElement("span");
    postWriteContentsBtns.classList.add("postWriteContentsBtns");
    let modifyAddImgBtn = document.createElement("button");
    modifyAddImgBtn.classList.add("modifyAddImgBtn");
    let mainBtns = document.createElement("span");
    mainBtns.classList.add("mainBtns");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    let modifyBtn = document.createElement("button");
    modifyBtn.classList.add("modifyBtn");

    let modifyTextarea = document.createElement("textarea");
    modifyTextarea.classList.add("modifyTextarea");

    super_id.appendChild(postWrite);
    postWrite.appendChild(postWriteWrapper);
    postWriteWrapper.appendChild(profileImg);
    postWriteWrapper.appendChild(postWriteContents);
    postWriteContents.appendChild(postWriteContentsBtns);
    postWriteContentsBtns.appendChild(mainBtns);
    postWriteContentsBtns.appendChild(modifyAddImgBtn);
    mainBtns.appendChild(modifyBtn);
    mainBtns.appendChild(deleteBtn);
    postWriteContents.appendChild(modifyTextarea);

    deleteBtn.innerHTML = "삭제";
    modifyBtn.innerHTML = "수정";

    modifyTextarea.setAttribute("onkeydown", "resize(this)");
    modifyTextarea.setAttribute("onkeyup", "resize(this)");
    modifyTextarea.setAttribute("rows", "1");
    modifyTextarea.setAttribute("readonly", "");
    modifyTextarea.innerHTML = text;

    modifyAddImgBtn.innerHTML = "gif";

    imgUrlsArr = document.querySelectorAll(".mainWriteContentsImgWrapper");
    if (!(imgUrlsArr.length === 0)) {
      for (let i = 0; i < imgUrlsArr.length; i++) {
        let postWriteContentsImgWrapper = document.createElement("span");
        postWriteContentsImgWrapper.classList.add(
          "postWriteContentsImgWrapper"
        );
        let postWriteContentsImgBtn = document.createElement("button");
        postWriteContentsImgBtn.classList.add("postWriteContentsImgBtn");
        postWriteContentsImgBtn.innerHTML = "X";
        let postWriteContentsImg = document.createElement("img");
        postWriteContentsImg.src = imgUrlsArr[i].children[0].src;

        postWriteContents.appendChild(postWriteContentsImgWrapper);
        postWriteContentsImgWrapper.appendChild(postWriteContentsImgBtn);
        postWriteContentsImgWrapper.appendChild(postWriteContentsImg);
      }
    }

    //해쉬태그 추가
    let tempGameTag = document.createElement("div");
    tempGameTag.classList.add("postWriteGameTag");
    let tempGameHashTag = document.createElement("span");
    tempGameHashTag.classList.add("postWriteGameHashTag");
    let tempHashTag = document.createElement("span");
    tempHashTag.classList.add("postWriteHashTag");

    let tempinModify = document.createElement("div");
    tempinModify.classList.add("CategoryinModify");
    let tempGameinModify = document.createElement("select");
    tempGameinModify.classList.add("chooseGameinModify");
    let tempGameoption1 = document.createElement("option");
    tempGameoption1.value = "#game1";
    tempGameoption1.innerHTML = "game1";
    let tempGameoption2 = document.createElement("option");
    tempGameoption2.value = "#game2";
    tempGameoption2.innerHTML = "game2";
    let tempGameoption3 = document.createElement("option");
    tempGameoption3.value = "#game3";
    tempGameoption3.innerHTML = "game3";
    let tempCategoryinModify = document.createElement("select");
    tempCategoryinModify.classList.add("chooseCategoryinModify");
    let tempCategoryoption1 = document.createElement("option");
    tempCategoryoption1.value = "#일상";
    tempCategoryoption1.innerHTML = "일상";
    let tempCategoryoption2 = document.createElement("option");
    tempCategoryoption2.value = "#공략";
    tempCategoryoption2.innerHTML = "공략";
    let tempCategoryoption3 = document.createElement("option");
    tempCategoryoption3.value = "#거래";
    tempCategoryoption3.innerHTML = "거래";

    postWrite.appendChild(tempGameTag);
    tempGameTag.appendChild(tempGameHashTag);
    tempGameTag.appendChild(tempHashTag);
    tempGameHashTag.innerHTML = chooseGame.value;
    tempHashTag.innerHTML = chooseCategory.value;

    postWrite.appendChild(tempinModify);
    tempinModify.appendChild(tempGameinModify);
    tempinModify.appendChild(tempCategoryinModify);
    tempGameinModify.appendChild(tempGameoption1);
    tempGameinModify.appendChild(tempGameoption2);
    tempGameinModify.appendChild(tempGameoption3);
    tempCategoryinModify.appendChild(tempCategoryoption1);
    tempCategoryinModify.appendChild(tempCategoryoption2);
    tempCategoryinModify.appendChild(tempCategoryoption3);

    postWriteGameTag = document.querySelectorAll(".postWriteGameTag");
    CategoryinModify = document.querySelectorAll(".CategoryinModify");
    chooseGameinModify = document.querySelectorAll(".chooseGameinModify");
    chooseCategoryinModify = document.querySelectorAll(
      ".chooseCategoryinModify"
    );
    postWriteGameHashTag = document.querySelectorAll(".postWriteGameHashTag");
    postWriteHashTag = document.querySelectorAll(".postWriteHashTag");
  };
  return PostGnb;
})();

//수정버튼, 삭제버튼 펑션
function BtnAttribute() {
  for (let i = 0; i < postWritesArr.length; i++) {
    //수정버튼
    modifyBtnsArr[i].onclick = function () {
      if (modifyBtnsArr[i].innerText === "수정") {
        modifyTextareasArr[
          i
        ].style.height = `${modifyTextareasArr[i].scrollHeight}px`;
        modifyTextareasArr[i].removeAttribute("readonly");
        modifyAddImgBtnsArr[i].style.display = "block";

        postWriteGameTag[i].style.display = "none";
        CategoryinModify[i].style.display = "block";
        for (let k = 0; k < postWriteContentsArr[i].children.length - 2; k++) {
          postWriteContentsArr[i].children[k + 2].children[0].style.display =
            "block";
        }
        // buttonDisplay()
        modifyBtnsArr[i].innerText = "완료";
      } else if (modifyBtnsArr[i].innerText === "완료") {
        let modifiedText = modifyTextareasArr[i].value;
        if (modifiedText === "") {
          alert("내용을 입력해주세요!");
          return;
        }
        modifyTextareasArr[i].setAttribute("readonly", "");
        modifyAddImgBtnsArr[i].style.display = "none";
        for (let k = 0; k < postWriteContentsArr[i].children.length - 2; k++) {
          postWriteContentsArr[i].children[k + 2].children[0].style.display =
            "none";
        }
        modifyBtnsArr[i].innerText = "수정";
        postWriteGameTag[i].style.display = "block";
        CategoryinModify[i].style.display = "none";
        //수정에서 해쉬태그 추가

        postWriteGameHashTag[i].innerHTML = chooseGameinModify[i].value;
        postWriteHashTag[i].innerHTML = chooseCategoryinModify[i].value;
      }
    };
    //수정에서 사진추가

    modifyAddImgBtnsArr[i].onclick = function () {
      document.querySelector(".ModifyPopUp").style.zIndex = "1";
      document.querySelector(".ModifyPopUp").style.display = "block";

      ModifyPopUpCancle.onclick = function () {
        document.querySelector(".ModifyPopUp").style.zIndex = "-999";
        document.querySelector(".ModifyPopUp").style.display = "none";
        modifyImgFile.value = "";
      };
      ModifyPopUpDone.onclick = function () {
        document.querySelector(".ModifyPopUp").style.zIndex = "-999";
        document.querySelector(".ModifyPopUp").style.display = "none";
        let modifyImgFileUrl = modifyImgFile.value;
        modifyImgFile.value = "";
        if (modifyImgFileUrl === "" || modifyImgFileUrl === null) {
          return;
        }

        let postWriteContentsImgWrapper = document.createElement("span");
        postWriteContentsImgWrapper.classList.add(
          "postWriteContentsImgWrapper"
        );
        let postWriteContentsImgBtn = document.createElement("button");
        postWriteContentsImgBtn.classList.add("postWriteContentsImgBtn");
        postWriteContentsImgBtn.innerHTML = "X";
        let postWriteContentsImg = document.createElement("img");
        postWriteContentsImg.src = modifyImgFileUrl;

        postWriteContentsArr[i].appendChild(postWriteContentsImgWrapper);
        console.log(postWriteContentsArr[i]);
        postWriteContentsImgWrapper.appendChild(postWriteContentsImgBtn);
        postWriteContentsImgWrapper.appendChild(postWriteContentsImg);

        modifyBtnsArr = document.querySelectorAll(".modifyBtn");
        deleteBtnsArr = document.querySelectorAll(".deleteBtn");
        modifyAddImgBtnsArr = document.querySelectorAll(".modifyAddImgBtn");

        postWritesArr = document.querySelectorAll(".postWrite");
        modifyTextareasArr = document.querySelectorAll(".modifyTextarea");

        postWriteContentsArr = document.querySelectorAll(".postWriteContents");
        postWriteContentsImgWrappersArr = document.querySelectorAll(
          ".postWriteContentsImgWrapper"
        );
        postWriteContentsImgBtnsArr = document.querySelectorAll(
          ".postWriteContentsImgBtn"
        );
        modifiyImgDelete();
        buttonDisplay(i);
      };
    };

    //사진삭제버튼
    function modifiyImgDelete() {
      for (let m = 0; m < postWriteContentsArr[i].children.length - 2; m++) {
        postWriteContentsArr[i].children[m + 2].children[0].onclick = function (
          e
        ) {
          console.log(e.target);
          // if(e.target == postWriteContentsImgBtnsArr){
          // e.target.parentElement.parentElement.removeChild(e.target.parentElement);
          // }
        };
      }
    }
    modifiyImgDelete();

    //포스팅삭제버튼
    deleteBtnsArr[i].onclick = function () {
      // console.log("삭제");
      // window.confirm("삭제하시겠습니까?");
      document.querySelector(".postWrapper").removeChild(postWritesArr[i]);
    };
  }
}

//포스팅모듈 실행
postRegisterBtn.onclick = function () {
  let text = mainWriteText.value;
  imgUrlsArr = document.querySelectorAll(".mainWriteContentsImgWrapper");
  if (text === "" || text === null) {
    alert("포스팅할 내용을 작성해 주세요!");
    return;
  }
  if (imgUrlsArr.length === 0) {
    new PostGnb(postWrapper, text, imgUrlsArr);
    mainWriteText.value = "";
    mainWriteText.style.height = "29px";
  } else {
    new PostGnb(postWrapper, text, imgUrlsArr);
    mainWriteText.value = "";
    mainWriteText.style.height = "29px";
    removeImgs = document.querySelectorAll(".mainWriteContentsImgWrapper");
    for (let i = 0; i < removeImgs.length; i++) {
      document.querySelector(".mainWriteContents").removeChild(removeImgs[i]);
    }
  }
  postWritesArr = document.querySelectorAll(".postWrite");
  postWriteContentsArr = document.querySelectorAll(".postWriteContents");
  modifyTextareasArr = document.querySelectorAll(".modifyTextarea");
  postWriteContentsBtnsArr = document.querySelectorAll(
    ".postWriteContentsBtns"
  );

  postWriteContentsImgWrappersArr = document.querySelectorAll(
    ".postWriteContentsImgWrapper"
  );
  postWriteContentsImgBtnsArr = document.querySelectorAll(
    ".postWriteContentsImgBtn"
  );

  modifyBtnsArr = document.querySelectorAll(".modifyBtn");
  deleteBtnsArr = document.querySelectorAll(".deleteBtn");
  modifyAddImgBtnsArr = document.querySelectorAll(".modifyAddImgBtn");

  for (let i = 0; i < postWritesArr.length; i++) {
    modifyTextareasArr[
      i
    ].style.height = `${modifyTextareasArr[i].scrollHeight}px`;
  }

  BtnAttribute();
};

BtnAttribute();

function buttonDisplay(i) {
  postWritesArr = document.querySelectorAll(".postWrite");
  postWriteContentsArr = document.querySelectorAll(".postWriteContents");
  modifyTextareasArr = document.querySelectorAll(".modifyTextarea");
  postWriteContentsBtnsArr = document.querySelectorAll(
    ".postWriteContentsBtns"
  );

  postWriteContentsImgWrappersArr = document.querySelectorAll(
    ".postWriteContentsImgWrapper"
  );
  postWriteContentsImgBtnsArr = document.querySelectorAll(
    ".postWriteContentsImgBtn"
  );

  modifyBtnsArr = document.querySelectorAll(".modifyBtn");
  deleteBtnsArr = document.querySelectorAll(".deleteBtn");
  modifyAddImgBtnsArr = document.querySelectorAll(".modifyAddImgBtn");
  console.log(postWriteContentsArr[i]);
  for (let k = 0; k < postWriteContentsArr[i].children.length - 2; k++) {
    postWriteContentsArr[i].children[k + 2].children[0].style.display = "block";
  }
}

//슬라이드
let wholeGameSlideNextButton = document.querySelector(
  ".wholeGameSlideNextButton"
);
let wholeGameSlidePrevButton = document.querySelector(
  ".wholeGameSlidePrevButton"
);
let wholeGameSlideul = document.querySelector(".wholeGameSlideul");
let wholeGameSlidelist = document.querySelectorAll(".wholeGameSlidelist");
let wholeGameSlidebar = document.querySelectorAll(".wholeGameSlidebar");

//슬라이드 넘기기

let index = 0;
wholeGameSlideul.style.left = 0;
let intervalFun;

function SlideSkipFun() {
  index += 1;
  if (index > wholeGameSlidebar.length - 1) {
    wholeGameSlideul.style.left = 0;
    index = 0;
    wholeGameSlidebar[index].checked = true;
  } else {
    wholeGameSlideul.style.left =
      parseInt(wholeGameSlideul.style.left) - 476 + "px";
    wholeGameSlidebar[index].checked = true;
  }
}

//첫화면 슬라이드 자동 넘기기

setTimeout(() => {
  wholeGameSlidebar[index].checked = true;
  intervalFun = setInterval(() => {
    SlideSkipFun();
  }, 5000);
}, 500);

//오른쪽으로 가는 버튼
wholeGameSlideNextButton.onclick = function () {
  console.log("gdgd");
  clearInterval(intervalFun);
  index += 1;
  if (index > wholeGameSlidebar.length - 1) {
    wholeGameSlideul.style.left = 0;
    index = 0;
    wholeGameSlidebar[index].checked = true;
  } else {
    wholeGameSlideul.style.left =
      parseInt(wholeGameSlideul.style.left) - 476 + "px";
    wholeGameSlidebar[index].checked = true;
  }
  intervalFun = setInterval(() => {
    SlideSkipFun();
  }, 5000);
};

//왼쪽으로 가는 버튼
wholeGameSlidePrevButton.onclick = function () {
  index -= 1;
  clearInterval(intervalFun);
  if (index < 0) {
    wholeGameSlideul.style.left = -(wholeGameSlidebar.length - 1) * 476 + "px";
    index = wholeGameSlidebar.length - 1;
    wholeGameSlidebar[index].checked = true;
  } else {
    wholeGameSlideul.style.left =
      parseInt(wholeGameSlideul.style.left) + 476 + "px";
    wholeGameSlidebar[index].checked = true;
  }
  intervalFun = setInterval(() => {
    SlideSkipFun();
  }, 5000);
};
