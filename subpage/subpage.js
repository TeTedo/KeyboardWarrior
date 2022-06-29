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
let addSlidebutton = document.querySelector(".addSlidebutton")
let getImgurlForSlidetext = document.querySelector(".getImgurlForSlidetext")
let getTextForSlide = document.querySelector(".getTextForSlide")
let addSlideAddButton = document.querySelector(".addSlideAddButton")
let addSlideCancelButton = document.querySelector(".addSlideCancelButton")
let wholeGameSlide = document.querySelector(".wholeGameSlide")
let wholeGameSlideLabel = document.querySelector(".wholeGameSlideLabel")
let addSlideWholePage = document.querySelector(".addSlideWholePage")
let numberOfModifySlide = document.querySelector(".numberOfModifySlide")
let modifySlideurl = document.querySelector(".modifySlideurl")
let modifySlidecomment = document.querySelector(".modifySlidecomment")
let modifySlideButtonModify = document.querySelector(".modifySlideButtonModify")
let modifySlideButtonDelete = document.querySelector(".modifySlideButtonDelete")
let modifySlideButtonCancel = document.querySelector(".modifySlideButtonCancel")
let modifySlideWholePage = document.querySelector(".modifySlideWholePage")
let modifySlidebutton = document.querySelector(".modifySlidebutton")
let wholeGameSlidelistImg = document.querySelectorAll(".wholeGameSlidelist img")
let wholeGameSlideLabelInnerText = document.querySelectorAll(".wholeGameSlideLabelInnerText")
let wholeGameSlideLabelNumber = document.querySelectorAll(".wholeGameSlideLabel label")
let wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li")
let modifyGameListbutton = document.querySelector(".modifyGameListbutton")
let modifyGameListWholePage = document.querySelector(".modifyGameListWholePage")
let numberOfModifyGameList = document.querySelector(".numberOfModifyGameList")
let modifyGameListurl = document.querySelector(".modifyGameListurl")
let modifyGameListComment = document.querySelector(".modifyGameListComment")
let modifyGameListName = document.querySelector(".modifyGameListName")
let modifyGameListHashTag = document.querySelector(".modifyGameListHashTag")
let modifyGameListButtonModify = document.querySelector(".modifyGameListButtonModify")
let modifyGameListButtonDelete = document.querySelector(".modifyGameListButtonDelete")
let modifyGameListButtonCancel = document.querySelector(".modifyGameListButtonCancel")
let ListGameName = document.querySelectorAll(".ListGameName")
let ListGameComment = document.querySelectorAll(".ListGameComment")
let ListGameHashTag = document.querySelectorAll(".ListGameHashTag")
let wholeGameZoneulimg = document.querySelectorAll(".wholeGameZoneul li img")

//리스트 관련 모듈
let AboutList = (
    function(){
        function AboutList(url,name,comment,hashtag){
            this.url = url;
            this.name = name;
            this.comment = comment;
            this.hashtag = hashtag;
        }
        AboutList.prototype.addgame = function(){
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
            ListGameHashTag.classList.add("ListGameHashTag");
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

            wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li");
        }
        AboutList.prototype.addslide = function(){
            let templist = document.createElement("li");
            templist.classList.add("wholeGameSlidelist")
            let tempa = document.createElement("a");
            let tempimg = document.createElement("img");
            let tempinput = document.createElement("input");
            tempinput.type = "radio";
            tempinput.name = "slide";
            tempinput.id = `Slide${wholeGameSlidebar.length}`;
            tempinput.className = "wholeGameSlidebar";
            let templabel = document.createElement("label");
            let tempdiv1 = document.createElement("div");
            tempdiv1.classList.add("fillColordiv")
            let tempdiv2 = document.createElement("div");
            tempdiv2.classList.add("wholeGameSlideLabelInnerText")
            let tempdiv3 = document.createElement("div");
            tempdiv3.classList.add("SliderBardiv")
            //슬라이드 이미지 추가
            templabel.htmlFor = tempinput.id;
            wholeGameSlideul.appendChild(templist);
            templist.appendChild(tempa);
            tempa.appendChild(tempimg);
            //레이블 추가
            wholeGameSlideLabel.appendChild(tempinput);
            wholeGameSlideLabel.appendChild(templabel);
            templabel.appendChild(tempdiv1);
            tempdiv1.appendChild(tempdiv2);
            tempdiv1.appendChild(tempdiv3);
            //값 넣어주기
            tempimg.src = this.url;
            tempdiv2.innerHTML = this.comment;
            //쿼리 값 다시 주기
            wholeGameSlidebar = document.querySelectorAll(".wholeGameSlidebar");
            wholeGameSlideul = document.querySelector(".wholeGameSlideul");
            wholeGameSlidelistImg = document.querySelectorAll(".wholeGameSlidelist img");
            wholeGameSlideLabelInnerText = document.querySelectorAll(".wholeGameSlideLabelInnerText");
            wholeGameSlideLabelNumber = document.querySelectorAll(".wholeGameSlideLabel label");
            wholeGameSlidelist = document.querySelectorAll(".wholeGameSlidelist");
        }
        AboutList.prototype.modifyslide = function(){
            let slideIndex = numberOfModifySlide.value -1;
            wholeGameSlidelistImg[slideIndex].src = modifySlideurl.value;
            wholeGameSlideLabelInnerText[slideIndex].innerHTML = modifySlidecomment.value;
            wholeGameSlidebar = document.querySelectorAll(".wholeGameSlidebar");
            wholeGameSlideul = document.querySelector(".wholeGameSlideul");
            wholeGameSlidelistImg = document.querySelectorAll(".wholeGameSlidelist img");
            wholeGameSlideLabelInnerText = document.querySelectorAll(".wholeGameSlideLabelInnerText");
            wholeGameSlideLabelNumber = document.querySelectorAll(".wholeGameSlideLabel label");
            wholeGameSlidelist = document.querySelectorAll(".wholeGameSlidelist");
        }
        AboutList.prototype.deleteslide = function(){
            let slideIndex = numberOfModifySlide.value -1;
            wholeGameSlideul.removeChild(wholeGameSlidelist[slideIndex]);
            wholeGameSlideLabel.removeChild(wholeGameSlidebar[slideIndex]);
            wholeGameSlideLabel.removeChild(wholeGameSlideLabelNumber[slideIndex]);
            wholeGameSlidebar = document.querySelectorAll(".wholeGameSlidebar");
            wholeGameSlideul = document.querySelector(".wholeGameSlideul");
            wholeGameSlidelistImg = document.querySelectorAll(".wholeGameSlidelist img");
            wholeGameSlideLabelInnerText = document.querySelectorAll(".wholeGameSlideLabelInnerText");
            wholeGameSlideLabelNumber = document.querySelectorAll(".wholeGameSlideLabel label");
            wholeGameSlidelist = document.querySelectorAll(".wholeGameSlidelist");
        }
        AboutList.prototype.modifygamelist = function(){
            let slideIndex = numberOfModifyGameList.value -1;
            wholeGameZoneulimg[slideIndex].src = modifyGameListurl.value;
            ListGameName[slideIndex].innerHTML = modifyGameListName.value;
            ListGameComment[slideIndex].innerHTML = modifyGameListComment.value;
            ListGameHashTag[slideIndex].innerHTML = modifyGameListHashTag.value;
            ListGameName = document.querySelectorAll(".ListGameName")
            ListGameComment = document.querySelectorAll(".ListGameComment")
            ListGameHashTag = document.querySelectorAll(".ListGameHashTag")
            wholeGameZoneulimg = document.querySelectorAll(".wholeGameZoneul li img")
        }
        AboutList.prototype.deletegamelist = function(){
            let slideIndex = numberOfModifyGameList.value -1;
            wholeGameZoneul.removeChild(wholeGameZoneullist[slideIndex]);
            wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li");
        }
        return AboutList
    }
)();

//슬라이드 수정 창 데이터 초기화
function removeDatefromModifySlide(){
    numberOfModifySlide.value = "";
    modifySlideurl.value = "";
    modifySlidecomment.value = "";
    modifySlideWholePage.style.display = "none";
}

//슬라이드 추가 창 데이터 초기화
function removeDatefromAddSlide(){
    getImgurlForSlidetext.value = "";
    getTextForSlide.value = "";
    addSlideWholePage.style.display = "none";
}

//게임종류 추가 창 데이터 초기화
function removeDatefromAddGame(){
    AddPageGeturlInput.value = "";
    AddPageGetnameInput.value = "";
    AddPageGetcommentInput.value = "";
    AddPageGethastagInput.value = "";
    AddHiddenPage.style.display = "none";
}

//게임종류 수정 창 데이터 초기화
function removeDatefromModifyGame(){
    numberOfModifyGameList.value = "";
    modifyGameListurl.value = "";
    modifyGameListName.value = "";
    modifyGameListComment.value = "";
    modifyGameListHashTag.value = "";
    modifyGameListWholePage.style.display = "none";
}

//게임종류 추가하기
adminModeAdd.onclick = function(e){
    AddHiddenPage.style.display = "block";
    AddPageAddButton.onclick = function(e){
        e.stopPropagation();
       new AboutList(AddPageGeturlInput.value,AddPageGetnameInput.value,AddPageGetcommentInput.value,AddPageGethastagInput.value).addgame();
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
    if(index>wholeGameSlidebar.length-1){
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
        wholeGameSlideul.style.left = -(wholeGameSlidebar.length-1)*600 + "px";
        index = wholeGameSlidebar.length-1;
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


// 슬라이드 레이블 클릭 화면 넘기기
function labelClickFun(){
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
}

//초기 레이블 클릭화면 넘기기 함수 실행
labelClickFun();


//슬라이드 추가하기
addSlidebutton.onclick = function(){
    addSlideWholePage.style.display = "block";
    //추가하기 버튼
    addSlideAddButton.onclick = function(e){
        e.stopPropagation();
        new AboutList(getImgurlForSlidetext.value,"",getTextForSlide.value).addslide();
        labelClickFun();
        removeDatefromAddSlide();
    }
    //취소버튼
    addSlideCancelButton.onclick = function(e){
        e.stopPropagation();
        removeDatefromAddSlide();
    }
}

//슬라이드 수정하기
modifySlidebutton.onclick = function (){
    modifySlideWholePage.style.display = "block";
    modifySlideButtonModify.onclick = function(e){
        e.stopPropagation();
        new AboutList().modifyslide();
        removeDatefromModifySlide();
    }
    modifySlideButtonDelete.onclick = function(e){
        e.stopPropagation();
        new AboutList().deleteslide();
        labelClickFun();
        removeDatefromModifySlide();
    }
    modifySlideButtonCancel.onclick = function(e){
        e.stopPropagation();
        removeDatefromModifySlide();
    }
}

//게임 리스트 수정하기
modifyGameListbutton.onclick = function(){
    modifyGameListWholePage.style.display = "block";
    modifyGameListButtonModify.onclick = function(e){
        e.stopPropagation();
        new AboutList().modifygamelist();
        removeDatefromModifyGame();
    }
    modifyGameListButtonDelete.onclick = function(e){
        e.stopPropagation();
        new AboutList().deletegamelist();
        removeDatefromModifyGame();
    }
    modifyGameListButtonCancel.onclick = function(e){
        e.stopPropagation();
        removeDatefromModifyGame();
    }
}