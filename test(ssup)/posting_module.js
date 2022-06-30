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

// let imgUrlsArr = document.querySelectorAll('.mainWriteContentsImgWrapper')



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
                modifyTextareasArr[i].style.height = `${modifyTextareasArr[i].scrollHeight}px`
                modifyTextareasArr[i].removeAttribute('readonly')
                modifyAddImgBtnsArr[i].style.display = 'block'
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
                modifyBtnsArr[i].innerText = "수정"
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
                console.log(postWriteContentsArr[i])
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
                modifiyImgDelete()
            }
        }


        //사진삭제버튼
        function modifiyImgDelete(){
            for(let m = 0; m<postWriteContentsArr[i].children.length-2; m++){
                postWriteContentsArr[i].children[m+2].children[0].onclick = function(e){
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
}

BtnAttribute()  