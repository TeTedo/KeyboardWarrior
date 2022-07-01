//포스팅 작성칸에 이미지첨부버튼

addGifBtn.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '1'
    document.querySelector('.popUp').style.display = 'block'
    mainWriteContents = document.querySelector('.mainWriteContents')
    
}
popUpCancle.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
    addImgFile.value=""
}
popUpDone.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
    let addedImgFileUrl = addImgFile.value
    let mainWriteContentsImgWrapper = document.createElement('span')
    mainWriteContentsImgWrapper.classList.add('mainWriteContentsImgWrapper')
    let mainWriteContentsImgBtn = document.createElement('button')
    mainWriteContentsImgBtn.classList.add('mainWriteContentsImgBtn')
    let mainWriteContentsImg = document.createElement('img')
    mainWriteContentsImg.classList.add('mainWriteContentsImg')

    document.querySelector('.mainWriteContents').appendChild(mainWriteContentsImgWrapper)
    mainWriteContentsImgWrapper.appendChild(mainWriteContentsImg)
    mainWriteContentsImgWrapper.appendChild(mainWriteContentsImgBtn)
    mainWriteContentsImgBtn.innerHTML = "X"

    mainWriteContentsImgWrappersArr = document.querySelectorAll('.mainWriteContentsImgWrapper')
    mainWriteContentsImgBtnsArr = document.querySelectorAll('.mainWriteContentsImgBtn')
    mainWriteContentsImgsArr = document.querySelectorAll('.mainWriteContentsImg')

    for (let i = 0; i<mainWriteContentsImgWrappersArr.length; i++){
        mainWriteContentsImgBtnsArr[i].onclick = function(){
            document.querySelector('.mainWriteContents').removeChild(mainWriteContentsImgWrappersArr[i])
        }
    }

    mainWriteContentsImg.src = addedImgFileUrl
    addImgFile.value=""

    for(let k = 0; k<mainWriteContents.children.length-2; k++){
        mainWriteContents.children[k+2].children[1].style.display='block'
    }
}

//=============================슬라이드======================================

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
            wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) -476 +"px";
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
    wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) -476 +"px";
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
        wholeGameSlideul.style.left = -(wholeGameSlidebar.length-1)*476 + "px";
        index = wholeGameSlidebar.length-1;
        wholeGameSlidebar[index].checked = true;
    }
    else{
    wholeGameSlideul.style.left = parseInt(wholeGameSlideul.style.left) +476 +"px";
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
            wholeGameSlideul.style.left = -i*476 + "px";
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
    if(modifySlideWholePage.style.display == "block"){
        modifySlideWholePage.style.display = "none"
    }
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
    if(addSlideWholePage.style.display == "block"){
        addSlideWholePage.style.display = "none"
    }
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



/*
해결할일
1: 이미지 수정눌러야 삭제버튼 뜨게 만들고, 수정칸에서 이미지 추가 삽입 가능한 버튼 만들기
2: 글쓸때 줄바꿈한거는 span에서 적용안되니깐 그냥 textarea로 쭉하고 attribute에 readonly 넣기
3: 해쉬태그관련
4: 
5: 
*/