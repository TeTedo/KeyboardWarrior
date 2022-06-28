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
    // mainWriteContentsaddedImg.style.display = 'block'
    let addedImgFileUrl = addImgFile.value
    let temp = document.createElement('img')
    temp.src = addedImgFileUrl
    document.querySelector('.mainWriteContents').appendChild(temp)
}

postRegisterBtn.onclick = function(){
    let text =  mainWriteText.value
    if(text === "" || text === null){
        alert('포스팅할 내용을 작성해 주세요!')
        return
    }
    let imgUrl = document.querySelector('.mainWriteContents img')
    if (imgUrl === "" || imgUrl === null){
        new PostGnb(postWrapper,text)    
        mainWriteText.value = ""
    }
    else{
        new PostGnb(postWrapper,text,imgUrl.src)
        mainWriteText.value = ""
        addImgFile.value= ""
        removeImg = document.querySelector('.mainWriteContents img')
        document.querySelector('.mainWriteContents').removeChild(removeImg)
    }

    // window.scrollTo({top:9999, behavior:"smooth"})
}

/*
해결할일
1: 텍스트를 영어로 작성하면 옆으로 쭉 길게 늘어남
2: 수정이랑 삭제 버튼 기능말들기
*/