let wholeGameZoneul = document.querySelector(".wholeGameZoneul")
let adminModeAdd = document.querySelector(".adminModeAdd")
let AddHiddenPage = document.querySelector(".AddHiddenPage")
let AddPageAddButton = document.querySelector(".AddPageAddButton")
let AddPageCancelButton = document.querySelector(".AddPageCancelButton")
let AddPageGeturl = document.querySelector(".AddPageGeturl")
let AddPageGetname = document.querySelector(".AddPageGetname")
let AddPageGetcomment = document.querySelector(".AddPageGetcomment")
let AddPageGethastag = document.querySelector(".AddPageGethastag")
let AddPageGeturlInput = document.querySelector(".AddPageGeturlInput")
let AddPageGetnameInput = document.querySelector(".AddPageGetnameInput")
let AddPageGetcommentInput = document.querySelector(".AddPageGetcommentInput")
let AddPageGethastagInput = document.querySelector(".AddPageGethastagInput")
let wholeGameSlideNextButton = document.querySelector(".wholeGameSlideNextButton")
let wholeGameSlidePrevButton = document.querySelector(".wholeGameSlidePrevButton")
let wholeGameSlideul = document.querySelector(".wholeGameSlideul")
let wholeGameSlidelist = document.querySelectorAll(".wholeGameSlidelist")
let wholeGameSlidebar = document.querySelectorAll(".wholeGameSlidebar")

//게임종류 추가하는 모듈
let PushList = (
    function(){
        function PushList(url,name,comment,hashtag){
            this.url = url;
            this.name = name;
            this.comment = comment;
            this.hashtag = hashtag;
        }
        PushList.prototype.addgame = function(){
            let templist = document.createElement("li");
            let tempa = document.createElement("a");
            let tempimg = document.createElement("img");
            let ListGameZone = document.createElement("div");
            ListGameZone.classList.add("ListGameZone");
            let ListGameName = document.createElement("div");
            ListGameName.classList.add("ListGameName");
            let ListGameComment = document.createElement("div");
            ListGameComment.classList.add("ListGameComment");
            let ListGameHashTag = document.createElement("div");
            ListGameHashTag.classList.add("ListGameHashTag")
            wholeGameZoneul.appendChild(templist);
            templist.appendChild(tempa);
            templist.appendChild(ListGameZone);
            tempa.appendChild(tempimg); 
            ListGameZone.appendChild(ListGameName);
            ListGameZone.appendChild(ListGameComment);
            ListGameZone.appendChild(ListGameHashTag);
            ListGameName.innerHTML = this.name;
            ListGameComment.innerHTML = this.comment;
            ListGameHashTag.innerHTML = this.hashtag;
            tempimg.src = this.url;
        }
        return PushList
    }
)();

//게임종류 추가하기 창 데이터 초기화
function removeDatefromAddGame(){
    AddPageGeturlInput.value = "";
    AddPageGetnameInput.value = "";
    AddPageGetcommentInput.value = "";
    AddPageGethastagInput.value = "";
    AddHiddenPage.style.display = "none";
}

//게임종류 추가하기
adminModeAdd.onclick = function(e){
    AddHiddenPage.style.display = "block";
    AddPageAddButton.onclick = function(e){
        e.stopPropagation();
       new PushList(AddPageGeturlInput.value,AddPageGetnameInput.value,AddPageGetcommentInput.value,AddPageGethastagInput.value).addgame();
        removeDatefromAddGame();
    }
    AddPageCancelButton.onclick = function(e){
        e.stopPropagation();
        removeDatefromAddGame();
    }
}

//슬라이드 넘기기

let index = 0;
wholeGameSlideul.style.left = 0;
let intervalFun;

function SlideSkipFun(){
        index += 1;
        if(index>wholeGameSlidebar.length-1){
            wholeGameSlideul.style.left = 0;
            index = 0;
            wholeGameSlidebar[index].checked = true;
        }
        else{
            wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) -600 +"px";
            wholeGameSlidebar[index].checked = true;
        }
}

//첫화면 슬라이드 자동 넘기기
setTimeout(()=>{
    wholeGameSlidebar[index].checked = true;
    intervalFun = setInterval(()=>{
        SlideSkipFun();
    },5000)    
}
,500)


//오른쪽으로 가는 버튼
wholeGameSlideNextButton.onclick = function(){
    clearInterval(intervalFun);
    index += 1;
    if(index>wholeGameSlidelist.length-1){
        wholeGameSlideul.style.left = 0;
        index = 0;
        wholeGameSlidebar[index].checked = true;
    }
    else{
    wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) -600 +"px";
    wholeGameSlidebar[index].checked = true;
    }
    intervalFun = setInterval(()=>{
        SlideSkipFun();
    },5000)   
}

//왼쪽으로 가는 버튼
wholeGameSlidePrevButton.onclick = function(){
    index -= 1;
    clearInterval(intervalFun);
    if(index<0){
        wholeGameSlideul.style.left = -(wholeGameSlidelist.length-1)*600 + "px";
        index = wholeGameSlidelist.length-1;
        wholeGameSlidebar[index].checked = true;
    }
    else{
    wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) +600 +"px";
    wholeGameSlidebar[index].checked = true;
    }
    intervalFun = setInterval(()=>{
        SlideSkipFun();
    },5000)   
}

//슬라이드 레이블 클릭 
for (let i = 0 ; i<wholeGameSlidebar.length ; i++){
    wholeGameSlidebar[i].onclick = function(){
        clearInterval(intervalFun);
        wholeGameSlideul.style.left = -i*600 + "px";
        index = i;
        intervalFun = setInterval(()=>{
            SlideSkipFun();
        },5000)   
    }
}

