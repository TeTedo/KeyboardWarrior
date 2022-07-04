//이미지첨부버튼

addGifBtn.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '2'
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



/*
해결할일
1: 이미지 수정눌러야 삭제버튼 뜨게 만들고, 수정칸에서 이미지 추가 삽입 가능한 버튼 만들기
2: 글쓸때 줄바꿈한거는 span에서 적용안되니깐 그냥 textarea로 쭉하고 attribute에 readonly 넣기
3: 해쉬태그관련
4: 
5: 
*/