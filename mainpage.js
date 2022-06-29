//이미지첨부버튼

addGifBtn.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '0'
    document.querySelector('.popUp').style.display = 'block'
}
popUpCancle.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
}
popUpDone.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
    let addedImgFileUrl = addImgFile.value
    let temp = document.createElement('img')
    temp.src = addedImgFileUrl
    document.querySelector('.mainWriteContents').appendChild(temp)
    addImgFile.value = null
}




/*
해결할일

2: 수정이랑 삭제 버튼 기능말들기
3: 이미지 첨부 팝업창 꾸미기
*/