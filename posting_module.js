//포스팅 작성 모듈
let postWritesArr = document.querySelectorAll('.postWrite')
let postWriteContentsArr = document.querySelectorAll('.postWriteContents')
let modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
let postWriteContentsTextsArr = document.querySelectorAll('.postWriteContentsText')
let postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')

let postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
let postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')

let modifyBtnsArr = document.querySelectorAll('.modifyBtn')
let deleteBtnsArr = document.querySelectorAll('.deleteBtn')
let modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')

// let imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')

// let subBtnsArr = document.querySelectorAll('.subBtns')
// let subBtnFirstArr = document.querySelectorAll('.subBtnFirst')
// let subBtnSecondArr = document.querySelectorAll('.subBtnSecond')
// let subBtnThirdArr = document.querySelectorAll('.subBtnThird')
// let subBtnFourthArr = document.querySelectorAll('.subBtnFourth')

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
            let mainBtns = document.createElement('span')
            mainBtns.classList.add('mainBtns')
            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('deleteBtn')
            let modifyBtn = document.createElement('button')
            modifyBtn.classList.add('modifyBtn')

    
            let modifyTextarea = document.createElement('textarea')
            modifyTextarea.classList.add('modifyTextarea')
            let postWriteContentsText = document.createElement('span')
            postWriteContentsText.classList.add('postWriteContentsText')
            
            super_id.appendChild(postWrite);
            postWrite.appendChild(postWriteWrapper)
            postWriteWrapper.appendChild(profileImg)
            postWriteWrapper.appendChild(postWriteContents)
            postWriteContents.appendChild(postWriteContentsBtns)
            postWriteContentsBtns.appendChild(mainBtns)
            mainBtns.appendChild(modifyBtn)
            mainBtns.appendChild(deleteBtn)
            postWriteContents.appendChild(modifyTextarea)
            postWriteContents.appendChild(postWriteContentsText)
            
            deleteBtn.innerHTML = "삭제"
            modifyBtn.innerHTML = "수정"

            modifyTextarea.setAttribute('onkeydown','resize(this)')
            modifyTextarea.setAttribute('onkeyup','resize(this)')
            modifyTextarea.setAttribute('rows','1')
            postWriteContentsText.innerHTML = text
            document.querySelector('.postWriteContentsText')
            
            imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')
            if(!(imgUrlsArr.length === 0)){
                for (let i = 0; i<imgUrlsArr.length; i++){
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

                }
            }
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
                let originText = postWriteContentsTextsArr[i].innerHTML
                modifyTextareasArr[i].innerHTML = originText
                modifyTextareasArr[i].style.height = `${postWriteContentsTextsArr[i].scrollHeight}px`
                modifyTextareasArr[i].style.display='block'
                postWriteContentsTextsArr[i].style.display='none'
                modifyAddImgBtnsArr[i].style.display = 'block'
                modifyBtnsArr[i].innerText = "완료"
            }
            else if(modifyBtnsArr[i].innerText==="완료"){
                let modifiedText = modifyTextareasArr[i].value
                if(modifiedText === ""){
                    alert("내용을 입력해주세요!")
                    return
                }
                postWriteContentsTextsArr[i].innerHTML = modifiedText
                modifyTextareasArr[i].style.display='none'
                postWriteContentsTextsArr[i].style.display='block'
                subBtnsArr[i].style.display = 'none'
                modifyBtnsArr[i].innerText = "수정"
            }
        }
        //수정에서 사진추가
        // for(let k = 0; k<4; k++){
            modifyAddImgBtnsArr[i].onclick = function(){
                document.querySelector('.ModifyPopUp').style.zIndex = '0'
                document.querySelector('.ModifyPopUp').style.display = 'block'

                ModifyPopUpCancle.onclick = function(){
                    document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                    document.querySelector('.ModifyPopUp').style.display = 'none'
                    modifyImgFile.value = ""
                } 
                ModifyPopUpDone.onclick = function(){
                    document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                    document.querySelector('.ModifyPopUp').style.display = 'none'
                    let modifyImgFileUrl = modifyImgFile.value
                    modifyImgFile.value = ""
                    if (modifyImgFileUrl === "" || modifyImgFileUrl === null){return}

                    
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
                    
                    postWriteContentsArr = document.querySelectorAll('.postWriteContents')
                    modifiyImgDelete()
                }
                
            // }
        }

          //사진삭제버튼
          function modifiyImgDelete(){
            for(let m = 0; m<postWriteContentsArr[i].children.length-3; m++){
                postWriteContentsArr[i].children[m+3].children[0].onclick = function(e){
                    e.stopPropagation();
                    console.log('삭제버튼 활성화')
                    console.log(m)
                    console.log(postWriteContentsArr[i].childElementCount-3)
                    console.log(postWriteContentsArr[i].children)
                    postWriteContentsArr[i].removeChild(postWriteContentsArr[i].children[m+3])
                    console.log(postWriteContentsArr[i].children)
                    console.log(postWriteContentsArr[i].childElementCount-3)
                    postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
                    postWriteContentsArr = document.querySelectorAll('.postWriteContents')
                    
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
    // console.log(imgUrlsArr)
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
    postWriteContentsTextsArr = document.querySelectorAll('.postWriteContentsText')
    postWriteContentsBtnsArr = document.querySelectorAll('.postWriteContentsBtns')

    postWriteContentsImgWrappersArr = document.querySelectorAll('.postWriteContentsImgWrapper')
    postWriteContentsImgBtnsArr = document.querySelectorAll('.postWriteContentsImgBtn')

    modifyBtnsArr = document.querySelectorAll('.modifyBtn')
    deleteBtnsArr = document.querySelectorAll('.deleteBtn')
    modifyAddImgBtnsArr = document.querySelectorAll('.modifyAddImgBtn')
    // subBtnsArr = document.querySelectorAll('.subBtns')
    // subBtnFirstArr = document.querySelectorAll('.subBtnFirst')
    // subBtnSecondArr = document.querySelectorAll('.subBtnSecond')
    // subBtnThirdArr = document.querySelectorAll('.subBtnThird')
    // subBtnFourthArr = document.querySelectorAll('.subBtnFourth')

    BtnAttribute()
}

BtnAttribute()  