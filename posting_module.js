//포스팅 작성 모듈
let postWritesArr = document.querySelectorAll('.postWrite')
let postWriteContentsArr = document.querySelectorAll('.postWriteContents')
let modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
let postWriteContentsTextsArr = document.querySelectorAll('.postWriteContentsText')
let modifyBtnsArr = document.querySelectorAll('.modifyBtn')
let deleteBtnsArr = document.querySelectorAll('.deleteBtn')
let subBtnsArr = document.querySelectorAll('.subBtns')
let subBtnFirstArr = document.querySelectorAll('.subBtnFirst')
let subBtnSecondArr = document.querySelectorAll('.subBtnSecond')
let subBtnThirdArr = document.querySelectorAll('.subBtnThird')
let subBtnFourthArr = document.querySelectorAll('.subBtnFourth')

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
            let subBtns = document.createElement('span')
            subBtns.classList.add('subBtns')
            let subBtnFirst = document.createElement('button')
            subBtnFirst.classList.add('subBtnFirst')
            let subBtnSecond = document.createElement('button')
            subBtnSecond.classList.add('subBtnSecond')
            let subBtnThird = document.createElement('button')
            subBtnThird.classList.add('subBtnThird')
            let subBtnFourth = document.createElement('button')
            subBtnFourth.classList.add('subBtnFourth')
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
            postWriteContentsBtns.appendChild(subBtns)
            subBtns.appendChild(subBtnFirst)
            subBtns.appendChild(subBtnSecond)
            subBtns.appendChild(subBtnThird)
            subBtns.appendChild(subBtnFourth)
            postWriteContents.appendChild(modifyTextarea)
            postWriteContents.appendChild(postWriteContentsText)
            
            deleteBtn.innerHTML = "삭제"
            modifyBtn.innerHTML = "수정"
            subBtnFirst.innerHTML = "1번사진"
            subBtnSecond.innerHTML = "2번사진"
            subBtnThird.innerHTML = "3번사진"
            subBtnFourth.innerHTML = "4번사진"
            modifyTextarea.setAttribute('onkeydown','resize(this)')
            modifyTextarea.setAttribute('onkeyup','resize(this)')
            modifyTextarea.setAttribute('rows','1')
            postWriteContentsText.innerHTML = text
            document.querySelector('.postWriteContentsText')
            
            if(!(imgUrlsArr.length === 0)){
                for (let i = 0; i<imgUrlsArr.length; i++){
                    let postImg = document.createElement('img')
                    postWriteContents.appendChild(postImg)
                    postImg.src = imgUrlsArr[i].src
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
                subBtnsArr[i].style.display = 'block'
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
            console.log(postWriteContentsArr[i].childElementCount)
        }
        //사진수정
        // for(let k = 0; k<postWriteContentsArr[i].childElementCount-3; k++){
        for(let k = 0; k<4; k++){
            console.log(subBtnsArr[i].children[k])
            subBtnsArr[i].children[k].onclick = function(){
                document.querySelector('.ModifyPopUp').style.zIndex = '0'
                document.querySelector('.ModifyPopUp').style.display = 'block'

                ModifyPopUpCancle.onclick = function(){
                    document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                    document.querySelector('.ModifyPopUp').style.display = 'none'
                    modifyImgFile.value = ""
                } 
                ModifyPopUpDone.onclick = function(){
                    console.log('실행')
                    document.querySelector('.ModifyPopUp').style.zIndex = '-999'
                    document.querySelector('.ModifyPopUp').style.display = 'none'
                    let modifyImgFileUrl = modifyImgFile.value
                    //아래줄은 사진 삭제기능때 넣기
                    // postWriteContentsArr[i].removeChild(postWriteContentsArr[i].children[3+k])
                    modifyImgFile.value = ""
                    if (modifyImgFileUrl === "" || modifyImgFileUrl === null){return}
                    console.log(postWriteContentsArr[i].children[3+k])
                    if(postWriteContentsArr[i].children[3+k]===undefined)
                    postWriteContentsArr[i].children[3+k].src = modifyImgFileUrl
                }
                
            }
        }
        //삭제
        deleteBtnsArr[i].onclick = function(){
            document.querySelector('.postWrapper').removeChild(postWritesArr[i])   
        }
        

    
    }
}

//포스팅모듈 실행
postRegisterBtn.onclick = function(){
    let text =  mainWriteText.value
    if(text === "" || text === null){
        alert('포스팅할 내용을 작성해 주세요!')
        return
    }
    let imgUrlsArr = document.querySelectorAll('.mainWriteContents img')
    if (imgUrlsArr.length === 0){
        new PostGnb(postWrapper,text,imgUrlsArr)    
        mainWriteText.value = ""
        mainWriteText.style.height = '29px'
    }
    else{
        new PostGnb(postWrapper,text,imgUrlsArr)
        mainWriteText.value = ""
        mainWriteText.style.height = '29px'
        // addImgFile.value= ""
        removeImgs = document.querySelectorAll('.mainWriteContents img')
        for(let i=0; i<removeImgs.length; i++){
            document.querySelector('.mainWriteContents').removeChild(removeImgs[i])
        }
    }
    postWritesArr = document.querySelectorAll('.postWrite')
    postWriteContentsArr = document.querySelectorAll('.postWriteContents')
    modifyTextareasArr = document.querySelectorAll('.modifyTextarea')
    postWriteContentsTextsArr = document.querySelectorAll('.postWriteContentsText')
    modifyBtnsArr = document.querySelectorAll('.modifyBtn')
    deleteBtnsArr = document.querySelectorAll('.deleteBtn')
    subBtnsArr = document.querySelectorAll('.subBtns')
    subBtnFirstArr = document.querySelectorAll('.subBtnFirst')
    subBtnSecondArr = document.querySelectorAll('.subBtnSecond')
    subBtnThirdArr = document.querySelectorAll('.subBtnThird')
    subBtnFourthArr = document.querySelectorAll('.subBtnFourth')

    BtnAttribute()
}

BtnAttribute()  