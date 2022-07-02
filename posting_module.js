let postWritesArr = document.querySelectorAll('.postWrite')
let postWriteContentsArr = document.querySelectorAll('.postWriteContents')
let modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
let postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')
let postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
let postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')
let modifyBtnsArr = document.querySelectorAll('.modifyBtn')
let deleteBtnsArr = document.querySelectorAll('.deleteBtn')
let modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')
let CategoryinModify = document.querySelectorAll('.CategoryinModify')
let postWriteGameHashTag = document.querySelectorAll('.postWriteGameHashTag')
let postWriteHashTag = document.querySelectorAll('.postWriteHashTag')
let chooseCategoryinModify = document.querySelectorAll('.chooseCategoryinModify')
let chooseGameinModify = document.querySelectorAll('.chooseGameinModify')
let postWriteGameTag = document.querySelectorAll(".postWriteGameTag")
let chooseGame = document.querySelector(".chooseGame")
let chooseCategory = document.querySelector(".chooseCategory")
//슬라이드 변수
let wholeGameSlide = document.querySelectorAll('.wholeGameSlide')
let wholeGameSlideButton = document.querySelectorAll('.wholeGameSlideButton')
let wholeGameSlideNextButton = document.querySelectorAll('.wholeGameSlideNextButton')
let wholeGameSlidePrevButton = document.querySelectorAll('.wholeGameSlidePrevButton')
let wholeGameSlideul = document.querySelectorAll('.wholeGameSlideul')
let wholeGameSlidelist = document.querySelectorAll('.wholeGameSlidelist')

//포스팅 작성 모듈
let PostGnb=(
    function(){
        function PostGnb(super_id,text,imgUrlsArr){
            this.init(super_id,text,imgUrlsArr)
        }
        PostGnb.prototype.init = function(super_id,text,imgUrlsArr){
            if(super_id ==="" || super_id === null){return}

            let postWrite = document.createElement('div')
            postWrite.classList.add('postWrite')
            let postWriteWrapper = document.createElement('span')
            postWriteWrapper.classList.add('postWriteWrapper')
            let profileImg = document.createElement('a')
            profileImg.classList.add('profileImg')
            let postWriteContents = document.createElement('span')
            postWriteContents.classList.add('postWriteContents')
            let postWriteContentsBtns = document.createElement('span')
            postWriteContentsBtns.classList.add('postWriteContentsBtns')
            let modifyAddImgBtn = document.createElement('button')
            modifyAddImgBtn.classList.add('modifyAddImgBtn')
            let mainBtns = document.createElement('span')
            mainBtns.classList.add('mainBtns')
            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            let modifyBtn = document.createElement('button')
            modifyBtn.classList.add('modifyBtn')

    
            let modifyTextarea = document.createElement('textarea')
            modifyTextarea.classList.add('modifyTextarea')
            
            super_id.appendChild(postWrite);
            postWrite.appendChild(postWriteWrapper)
            postWriteWrapper.appendChild(profileImg)
            postWriteWrapper.appendChild(postWriteContents)
            postWriteContents.appendChild(postWriteContentsBtns)
            postWriteContentsBtns.appendChild(mainBtns)
            postWriteContentsBtns.appendChild(modifyAddImgBtn)
            mainBtns.appendChild(modifyBtn)
            mainBtns.appendChild(deleteBtn)
            postWriteContents.appendChild(modifyTextarea)
            
            deleteBtn.innerHTML = "삭제"
            modifyBtn.innerHTML = "수정"

            modifyTextarea.setAttribute('onkeydown','resize(this)')
            modifyTextarea.setAttribute('onkeyup','resize(this)')
            modifyTextarea.setAttribute('rows','1')
            modifyTextarea.setAttribute('readonly','')
            modifyTextarea.innerHTML = text

            modifyAddImgBtn.innerHTML = "gif"

            // 7/2 민섭 수정: 이미지 있을때나 없을때나 슬라이드형식은 만들어둬야해서 슬라이드추가를 그림추가 조건문 밖으로 뺌
            //슬라이드 ul 추가
            let tempGameSlide = document.createElement("div");
            tempGameSlide.classList.add("wholeGameSlide");
            let tempGameSlideButton = document.createElement("div");
            tempGameSlideButton.classList.add("wholeGameSlideButton");
            let tempGameSlideNextButton = document.createElement("div");
            tempGameSlideNextButton.classList.add("wholeGameSlideNextButton");
            let tempGameSlidePrevButton = document.createElement("div");
            tempGameSlidePrevButton.classList.add("wholeGameSlidePrevButton");
            let tempGameSlideul = document.createElement("ul");
            tempGameSlideul.classList.add("wholeGameSlideul");
            

            postWriteContents.appendChild(tempGameSlide);
            tempGameSlide.appendChild(tempGameSlideButton);
            tempGameSlideButton.appendChild(tempGameSlideNextButton);
            tempGameSlideButton.appendChild(tempGameSlidePrevButton);
            tempGameSlide.appendChild(tempGameSlideul);
            

            //그림추가
            imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')
            if(!(imgUrlsArr.length === 0)){
                for (let i = 0; i<imgUrlsArr.length; i++){
                    //일반그림추가
                    let postWriteContentsImgWrapper = document.createElement('span')
                    postWriteContentsImgWrapper.classList.add('postWriteContentsImgWrapper')
                    let postWriteContentsImgBtn = document.createElement('button')
                    postWriteContentsImgBtn.classList.add('postWriteContentsImgBtn')
                    postWriteContentsImgBtn.innerHTML = "X"
                    let postWriteContentsImg = document.createElement('img')
                    postWriteContentsImg.src = imgUrlsArr[i].children[0].src

                    postWriteContents.appendChild(postWriteContentsImgWrapper)
                    postWriteContentsImgWrapper.appendChild(postWriteContentsImgBtn)
                    postWriteContentsImgWrapper.appendChild(postWriteContentsImg)

                    //슬라이드 그림추가 
                    let tempGameSlidelist = document.createElement("li");
                    tempGameSlidelist.classList.add("wholeGameSlidelist");
                    let tempGameSlideImg = document.createElement("img")
                    tempGameSlideul.appendChild(tempGameSlidelist)
                    tempGameSlideImg.src =postWriteContentsImg.src
                    tempGameSlidelist.appendChild(tempGameSlideImg)
                }
                // 7/2 민섭: 사진 1장이면 버튼 안보이게하기
                if(imgUrlsArr.length === 1){
                    tempGameSlideNextButton.style.display = 'none'
                    tempGameSlidePrevButton.style.display = 'none'
                }
            }
            else{
                tempGameSlide.style.display = 'none'
            }

            //해쉬태그 추가
            let tempGameTag = document.createElement("div")
            tempGameTag.classList.add("postWriteGameTag")
            let tempGameHashTag = document.createElement("span")
            tempGameHashTag.classList.add("postWriteGameHashTag")
            let tempHashTag = document.createElement("span")
            tempHashTag.classList.add("postWriteHashTag")

            let tempinModify = document.createElement("div")
            tempinModify.classList.add("CategoryinModify")
            let tempGameinModify = document.createElement("select")
            tempGameinModify.classList.add("chooseGameinModify")
            let tempGameoption1 = document.createElement("option")
            tempGameoption1.value = "#game1"; tempGameoption1.innerHTML = "game1"; 
            let tempGameoption2 = document.createElement("option")
            tempGameoption2.value = "#game2"; tempGameoption2.innerHTML = "game2";
            let tempGameoption3 = document.createElement("option")
            tempGameoption3.value = "#game3"; tempGameoption3.innerHTML = "game3";
            let tempCategoryinModify = document.createElement("select")
            tempCategoryinModify.classList.add("chooseCategoryinModify")
            let tempCategoryoption1 = document.createElement("option")
            tempCategoryoption1.value = "#일상"; tempCategoryoption1.innerHTML = "일상";
            let tempCategoryoption2 = document.createElement("option")
            tempCategoryoption2.value = "#공략"; tempCategoryoption2.innerHTML = "공략";
            let tempCategoryoption3 = document.createElement("option")
            tempCategoryoption3.value = "#거래"; tempCategoryoption3.innerHTML = "거래";

            postWrite.appendChild(tempGameTag);
            tempGameTag.appendChild(tempGameHashTag);
            tempGameTag.appendChild(tempHashTag);
            tempGameHashTag.innerHTML = chooseGame.value
            tempHashTag.innerHTML = chooseCategory.value

            postWrite.appendChild(tempinModify);
            tempinModify.appendChild(tempGameinModify);
            tempinModify.appendChild(tempCategoryinModify);
            tempGameinModify.appendChild(tempGameoption1);
            tempGameinModify.appendChild(tempGameoption2);
            tempGameinModify.appendChild(tempGameoption3);
            tempCategoryinModify.appendChild(tempCategoryoption1);
            tempCategoryinModify.appendChild(tempCategoryoption2);
            tempCategoryinModify.appendChild(tempCategoryoption3);

            renewalArr()
         }
         return PostGnb
    }
)();
//=========================모듈 끝, 함수 시작=====================================

//어레이변수들 초기화 함수
let renewalArr = function(){
 postWritesArr = document.querySelectorAll('.postWrite')
 postWriteContentsArr = document.querySelectorAll('.postWriteContents')
 modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
 postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')
 postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
 postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')
 modifyBtnsArr = document.querySelectorAll('.modifyBtn')
 deleteBtnsArr = document.querySelectorAll('.deleteBtn')
 modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')
 CategoryinModify = document.querySelectorAll('.CategoryinModify')
 postWriteGameHashTag = document.querySelectorAll('.postWriteGameHashTag')
 postWriteHashTag = document.querySelectorAll('.postWriteHashTag')
 chooseCategoryinModify = document.querySelectorAll('.chooseCategoryinModify')
 chooseGameinModify = document.querySelectorAll('.chooseGameinModify')
 postWriteGameTag = document.querySelectorAll(".postWriteGameTag")
 chooseGame = document.querySelector(".chooseGame")
 chooseCategory = document.querySelector(".chooseCategory")
 wholeGameSlide = document.querySelectorAll('.wholeGameSlide')
 wholeGameSlideButton = document.querySelectorAll('.wholeGameSlideButton')
 wholeGameSlideNextButton = document.querySelectorAll('.wholeGameSlideNextButton')
 wholeGameSlidePrevButton = document.querySelectorAll('.wholeGameSlidePrevButton')
 wholeGameSlideul = document.querySelectorAll('.wholeGameSlideul')
 wholeGameSlidelist = document.querySelectorAll('.wholeGameSlidelist')
}

 //수정버튼, 삭제버튼 함수
 function BtnAttribute(){
    for(let i = 0; i<postWritesArr.length; i++){
        //수정버튼
        modifyBtnsArr[i].onclick = function(){

            //수정버튼 눌렸을때
            if(modifyBtnsArr[i].innerText==="수정"){
                modifyTextareasArr[i].style.height = `${modifyTextareasArr[i].scrollHeight}px`
                modifyTextareasArr[i].removeAttribute('readonly')
                modifyAddImgBtnsArr[i].style.display = 'block'
                postWriteGameTag[i].style.display = "none"
                CategoryinModify[i].style.display = "block"
                //이미지 리스트형식으로 보이게하고
                let Imgtemp = postWriteContentsArr[i].querySelectorAll('.postWriteContentsImgWrapper')
                for(let k = 0; k<Imgtemp.length; k++){
                    Imgtemp[k].style.display = "block";
                }
               
                //슬라이드안보이게하고
                postWriteContentsArr[i].querySelector('.wholeGameSlide').style.display = "none";
                //사진위에x버튼 보이게하고
                buttonDisplay(i)
                modifyBtnsArr[i].innerText = "완료"
            }

            //완료버튼 눌렀을때
            else if(modifyBtnsArr[i].innerText==="완료"){
                let modifiedText = modifyTextareasArr[i].value
                if(modifiedText === ""){
                    alert("내용을 입력해주세요!")
                    return
                }
                modifyTextareasArr[i].setAttribute('readonly','')
                modifyAddImgBtnsArr[i].style.display = 'none'
                postWriteGameTag[i].style.display = "block"
                CategoryinModify[i].style.display = "none"

                //사진위x버튼 안보이게하고
                for(let k = 0; k<postWriteContentsArr[i].children.length-3; k++){
                    postWriteContentsArr[i].children[k+3].children[0].style.display='none'
                }
                //일반사진들 안보이게하고
                let imgCount = postWriteContentsArr[i].querySelectorAll('.postWriteContentsImgWrapper')
                for(let k = 0; k<imgCount.length; k++){
                    imgCount[k].style.display = "none";
                }
                //슬라이드에 사진 넣고
                //2022.07.02 오류 : 글만 등록후 사진추가할때 슬라이드 만들기 오류, 기존 이미지 있는 글 수정할때 이미지 추가하면 이미지 안보임 오류;;
                //민섭: 위 오류는 모듈로 포스팅 만들때 이미지 있던 없던 슬라이드 형식은 들어가게 하는걸로 해결함
                //민섭: 이미지추가 팝업창에 사진 추가할때마다 슬라이드에 이미지 바로바로 들어가벼려서 사진추가하고 삭제한것도 슬라이드에 들어가버림
                //     그래서 수정완료 누르면 기존 슬라이드 이미지 싹 지우고 수정창에있던 이미지들이 들어가도록 아래코드들 입력
                //먼저 원래있던 slidUl 날림
                tempUl = postWriteContentsArr[i].querySelector('.wholeGameSlideul')
                postWriteContentsArr[i].querySelector('.wholeGameSlide').removeChild(tempUl)
                //slideUl 새로 만들어서 넣음
                tempGameSlideul = document.createElement("ul")
                tempGameSlideul.classList.add("wholeGameSlideul")
                wholeGameSlide[i].appendChild(tempGameSlideul)
                //어레이 초기화
                renewalArr()
                //새 slideUl에 수정창속 나열된 이미지들 추가
                for(let m = 0; m<imgCount.length; m++ ){
                    let tempGameSlidelist = document.createElement("li");
                    tempGameSlidelist.classList.add("wholeGameSlidelist");
                    let tempGameSlideImg = document.createElement("img")
                    postWriteContentsImg = postWriteContentsArr[i].children[m+3].children[1]
                    tempGameSlideImg.src =postWriteContentsImg.src
                    wholeGameSlideul[i].appendChild(tempGameSlidelist)
                    tempGameSlidelist.appendChild(tempGameSlideImg)
                }
                //요소 추가됐으니 어레이변수 초기화 해주고
                renewalArr()
                //슬라이드 보이게하고
                if(!(imgCount.length==0)){
                    postWriteContentsArr[i].querySelector('.wholeGameSlide').style.display = "block";
                    postWriteContentsArr[i].querySelector('.wholeGameSlideButton').style.display = "block";
                }
                //슬라이드버튼 보이기 조정
                if(imgCount.length === 1){
                    postWriteContentsArr[i].querySelector('.wholeGameSlideNextButton').style.display = "none";
                    postWriteContentsArr[i].querySelector('.wholeGameSlidePrevButton').style.display = "none";
                    
                }
                else{
                    postWriteContentsArr[i].querySelector('.wholeGameSlideNextButton').style.display = "block";
                    postWriteContentsArr[i].querySelector('.wholeGameSlideNextButton').style.display = "block";
                }
                modifyBtnsArr[i].innerText = "수정"
                //수정에서 해쉬태그 추가
                postWriteGameHashTag[i].innerHTML = chooseGameinModify[i].value
                postWriteHashTag[i].innerHTML = chooseCategoryinModify[i].value
            }
        }

        //수정에서 사진추가 팝업창
        modifyAddImgBtnsArr[i].onclick = function(){
            document.querySelector('.ModifyPopUp').style.zIndex = '1'
            document.querySelector('.ModifyPopUp').style.display = 'block'

            ModifyPopUpCancle.onclick = function(){
                document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                document.querySelector('.ModifyPopUp').style.display = 'none'
                modifyImgFile.value = ""
            } 
            ModifyPopUpDone.onclick = function(){
                //팝업창끄기
                document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                document.querySelector('.ModifyPopUp').style.display = 'none'
                //첨부한 이미지 url 받아오기
                let modifyImgFileUrl = modifyImgFile.value
                modifyImgFile.value = ""
                if (modifyImgFileUrl === "" || modifyImgFileUrl === null){return}

                //수정창에 사진 추가
                ///일반사진 추가
                let postWriteContentsImgWrapper = document.createElement('span')
                postWriteContentsImgWrapper.classList.add('postWriteContentsImgWrapper')
                let postWriteContentsImgBtn = document.createElement('button')
                postWriteContentsImgBtn.classList.add('postWriteContentsImgBtn')
                postWriteContentsImgBtn.innerHTML = "X"
                let postWriteContentsImg = document.createElement('img')
                postWriteContentsImg.src = modifyImgFileUrl

                postWriteContentsArr[i].appendChild(postWriteContentsImgWrapper)
                postWriteContentsImgWrapper.appendChild(postWriteContentsImgBtn)
                postWriteContentsImgWrapper.appendChild(postWriteContentsImg)
                
                //요소 추가 되었으므로 어레이변수들 초기화
                renewalArr()
                //추간된 사진 보이게하기
                let Imgtemp = postWriteContentsArr[i].querySelectorAll('.postWriteContentsImgWrapper')
                for(let k = 0; k<Imgtemp.length; k++){
                    Imgtemp[k].style.display = "block";
                }
                //X버튼 보이게하기
                buttonDisplay(i)
                //X버튼누르면 사진 삭제
                modifiyImgDelete()              
            }
        }

        //사진삭제버튼
        function modifiyImgDelete(){
            for(let m = 0; m<postWriteContentsArr[i].children.length-3; m++){
                postWriteContentsArr[i].children[m+3].children[0].onclick = function(e){
                    if(e.target.classList.contains('wholeGameSlideNextButton') || e.target.classList.contains('wholeGameSlidePrevButton') ){return}
                    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                }
            }
            //삭제하고 변수 초기화
            renewalArr()
        }
        modifiyImgDelete()

        //포스팅삭제버튼
        deleteBtnsArr[i].onclick = function(e){
            console.log(e.target.parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement)
            e.target.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement.removeChild
            (e.target.parentElement.parentElement.parentElement
            .parentElement.parentElement)
            //삭제하고 변수 초기화
            renewalArr() 
        }
    }
}

//삭제버튼 보이게하는 함수
function buttonDisplay(i){
    for(let k = 0; k<postWriteContentsArr[i].children.length-3; k++){
        postWriteContentsArr[i].children[k+3].children[0].style.display='block'
    }
}

//슬라이드 함수
function SlideFun(){
    let index=0;
    for(let i =0; i<wholeGameSlide.length;i++){
        wholeGameSlideul[i].style.left = "0px"
        wholeGameSlide[i].onclick = function(e){
            if(e.target.classList.contains("wholeGameSlideNextButton")){
                index++;
                if(index>wholeGameSlideul[i].childElementCount-1){
                    index = 0;
                    wholeGameSlideul[i].style.left = "0px"
                }
                else{
                    wholeGameSlideul[i].style.left = parseInt(wholeGameSlideul[i].style.left) -476 + "px"
                }
            }
            if(e.target.classList.contains("wholeGameSlidePrevButton")){
                index--;
                if(index<0){
                    index = wholeGameSlideul[i].childElementCount-1
                    wholeGameSlideul[i].style.left = -476*(wholeGameSlideul[i].childElementCount-1) + "px"
                }
                else{
                    wholeGameSlideul[i].style.left = parseInt(wholeGameSlideul[i].style.left) +476 + "px"
                }
            }
        }
    }
}

//===========================함수,모듈 끝==============================================//
//포스팅모듈 실행
postRegisterBtn.onclick = function(){
    let text =  mainWriteText.value
    imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')
    if(text === "" || text === null){
        alert('포스팅할 내용을 작성해 주세요!')
        return
    }
    if (imgUrlsArr.length === 0){
        new PostGnb(postWrapper,text,imgUrlsArr)    
        mainWriteText.value = ""
        mainWriteText.style.height = '29px'
    }
    else{
        new PostGnb(postWrapper,text,imgUrlsArr)
        mainWriteText.value = ""
        mainWriteText.style.height = '29px'
        removeImgs = document.querySelectorAll('.mainWriteContentsImgWrapper')
        for(let i=0; i<removeImgs.length; i++){
            document.querySelector('.mainWriteContents').removeChild(removeImgs[i])
        }
    }
    //모듈실행으로 포스트 추가됐으니깐 어레이변수 초기화
    renewalArr()

    for (let i = 0; i<postWritesArr.length; i++){
        modifyTextareasArr[i].style.height = `${modifyTextareasArr[i].scrollHeight}px`
    }

    BtnAttribute()
    SlideFun()
}

BtnAttribute()  
SlideFun();
// deletePost()

