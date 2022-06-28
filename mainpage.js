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
    mainWriteContentsaddedImg.style.display = 'block'
    let addedImgFileUrl = addImgFile.value
    let temp = document.createElement('img')
    temp.src = addedImgFileUrl
    mainWriteContentsaddedImg.appendChild(temp)
}

