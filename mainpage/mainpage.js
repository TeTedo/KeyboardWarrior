//이미지첨부버튼

addGifBtn.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '0'
    document.querySelector('.popUp').style.display = 'block'
}
popUpCancle.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
    addImgFile.value=""
}
popUpDone.onclick = function(){
    document.querySelector('.popUp').style.zIndex = '-999'
    document.querySelector('.popUp').style.display = 'none'
    // mainWriteContentsaddedImg.style.display = 'block'
    let addedImgFileUrl = addImgFile.value
    let temp = document.createElement('img')
    temp.src = addedImgFileUrl
    document.querySelector('.mainWriteContents').appendChild(temp)
    addImgFile.value=""
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
1: 수정눌러서 이미지 수정할때 이미지 추가버튼을 만들고, 각각 이미지를 삭제할수있는 버튼을 따로 만들자
2: 글쓸때 줄바꿈한거는 span에서 적용안되니깐 그냥 textarea로 쭉하고 attribute에 readonly 넣기
3: 
4: 
5: 
*/