//포스팅 작성 모듈
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

            
            

            //그림추가
            imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')
            if(!(imgUrlsArr.length === 0)){

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

            

            postWriteGameTag = document.querySelectorAll(".postWriteGameTag")
            CategoryinModify = document.querySelectorAll('.CategoryinModify')
            chooseGameinModify = document.querySelectorAll('.chooseGameinModify')
            chooseCategoryinModify = document.querySelectorAll('.chooseCategoryinModify')
            postWriteGameHashTag = document.querySelectorAll('.postWriteGameHashTag')
            postWriteHashTag = document.querySelectorAll('.postWriteHashTag')


         }
         return PostGnb
    }
)();

 //수정버튼, 삭제버튼 펑션
 function BtnAttribute(){
    for(let i = 0; i<postWritesArr.length; i++){
        //수정버튼
        modifyBtnsArr[i].onclick = function(){
            
            if(modifyBtnsArr[i].innerText==="수정"){
                modifyTextareasArr[i].style.height = `${modifyTextareasArr[i].scrollHeight}px`
                modifyTextareasArr[i].removeAttribute('readonly')
                modifyAddImgBtnsArr[i].style.display = 'block'
                postWriteGameTag[i].style.display = "none"
                CategoryinModify[i].style.display = "block"
                let Imgtemp = postWriteContentsArr[i].querySelectorAll('.postWriteContentsImgWrapper')
                for(let k = 0; k<Imgtemp.length; k++){
                    Imgtemp[k].style.display = "block";
                }
                postWriteContentsArr[i].querySelector('.wholeGameSlide').style.display = "none";
               

                for(let k = 0; k<postWriteContentsArr[i].children.length-2; k++){
                    postWriteContentsArr[i].children[k+2].children[0].style.display='block'
                }
                // buttonDisplay()
                modifyBtnsArr[i].innerText = "완료"
            }
            else if(modifyBtnsArr[i].innerText==="완료"){
                let modifiedText = modifyTextareasArr[i].value
                if(modifiedText === ""){
                    alert("내용을 입력해주세요!")
                    return
                }
                modifyTextareasArr[i].setAttribute('readonly','')
                modifyAddImgBtnsArr[i].style.display = 'none'
                for(let k = 0; k<postWriteContentsArr[i].children.length-2; k++){
                    postWriteContentsArr[i].children[k+2].children[0].style.display='none'
                }
                modifyBtnsArr[i].innerText = "수정"
                postWriteGameTag[i].style.display = "block"
                CategoryinModify[i].style.display = "none"

                let lololo = postWriteContentsArr[i].querySelectorAll('.postWriteContentsImgWrapper')
                for(let k = 0; k<lololo.length; k++){
                    lololo[k].style.display = "none";
                }
                postWriteContentsArr[i].querySelector('.wholeGameSlideButton').style.display = "block";

                //수정에서 해쉬태그 추가
                
                postWriteGameHashTag[i].innerHTML = chooseGameinModify[i].value
                postWriteHashTag[i].innerHTML = chooseCategoryinModify[i].value

                postWriteContentsArr[i].querySelector('.wholeGameSlide').style.display = "block";

            }
        }
        //수정에서 사진추가
        
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
                //일반사진 추가
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
                
                modifyBtnsArr = document.querySelectorAll('.modifyBtn')
                deleteBtnsArr = document.querySelectorAll('.deleteBtn')
                modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')
                postWritesArr = document.querySelectorAll('.postWrite')
                modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
                postWriteContentsArr = document.querySelectorAll('.postWriteContents')
                postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
                postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')
                //슬라이드사진 추가
                let tempGameSlidelist = document.createElement("li");
                tempGameSlidelist.classList.add("wholeGameSlidelist");
                let tempGameSlideImg = document.createElement("img")
                wholeGameSlideul[i].appendChild(tempGameSlidelist)
                tempGameSlideImg.src =postWriteContentsImg.src
                tempGameSlidelist.appendChild(tempGameSlideImg)

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
            for(let m = 0; m<postWriteContentsArr[i].children.length-2; m++){
                postWriteContentsArr[i].children[m+2].children[0].onclick = function(e){
                    console.log(e.target)
                    if(e.target.classList.contains('wholeGameSlideNextButton') || e.target.classList.contains('wholeGameSlidePrevButton') ){return}
                    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                }
            }
        }
        modifiyImgDelete()

        //포스팅삭제버튼
        deleteBtnsArr[i].onclick = function(){
            document.querySelector('.postWrapper').removeChild(postWritesArr[i])   
        }
    }
}

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
    postWritesArr = document.querySelectorAll('.postWrite')
    postWriteContentsArr = document.querySelectorAll('.postWriteContents')
    modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
    postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')

    postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
    postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')

    modifyBtnsArr = document.querySelectorAll('.modifyBtn')
    deleteBtnsArr = document.querySelectorAll('.deleteBtn')
    modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')

    for (let i = 0; i<postWritesArr.length; i++){
        modifyTextareasArr[i].style.height = `${modifyTextareasArr[i].scrollHeight}px`
    }

    BtnAttribute()
    SlideFun()
}

BtnAttribute()  

function buttonDisplay(i){
    postWritesArr = document.querySelectorAll('.postWrite')
    postWriteContentsArr = document.querySelectorAll('.postWriteContents')
    modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
    postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')

    postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
    postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')

    modifyBtnsArr = document.querySelectorAll('.modifyBtn')
    deleteBtnsArr = document.querySelectorAll('.deleteBtn')
    modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')
    for(let k = 0; k<postWriteContentsArr[i].children.length-2; k++){
        postWriteContentsArr[i].children[k+2].children[0].style.display='block'
    }
}

//슬라이드 함수
function SlideFun(){
    wholeGameSlide = document.querySelectorAll('.wholeGameSlide')
    wholeGameSlideButton = document.querySelectorAll('.wholeGameSlideButton')
    wholeGameSlideNextButton = document.querySelectorAll('.wholeGameSlideNextButton')
    wholeGameSlidePrevButton = document.querySelectorAll('.wholeGameSlidePrevButton')
    wholeGameSlideul = document.querySelectorAll('.wholeGameSlideul')
    wholeGameSlidelist = document.querySelectorAll('.wholeGameSlidelist')
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
SlideFun();


//수정에서 사진추가 안됨