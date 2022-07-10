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


//등록버튼 활성화
let mainWriteText = document.querySelector(".mainWriteText")
let Btn = document.querySelector(".postRegisterBtn")
mainWriteText.onkeydown = function(e){
    if(mainWriteText.value.length >= 0){
        Btn.classList.add("forregisteractive");
    }
    else{
        Btn.classList.remove("forregisteractive");
    }
}
//키 다 입력시 길이 0이면 비활성화
mainWriteText.onkeyup = function(){
    if(mainWriteText.value.length==0){
        Btn.classList.remove("forregisteractive")
    }
}

//로그인 기능 관련

//ID PW 한글자라도 입력하면 로그인하기 버튼 활성화
let forlogininput = document.querySelectorAll(".forlogininput")
let forloginbutton = document.querySelector(".forloginbutton")

forlogininput[0].onkeydown = function(e){
    //아이디입력시 비밀번호에 입력되있으면 클래스리스트 추가
    if(!forlogininput[1].value.length==0){
        if(!forloginbutton.classList.contains("forloginactive")){
            forloginbutton.classList.add("forloginactive")}
    }
    else{
        forloginbutton.classList.remove("forloginactive")
    }
    //엔터로 로그인
    if(e.keyCode == 13){
        if(forlogininput[0].value == "admin" && forlogininput[1].value == "admin"){
            alert("테스트 모드입니다.")
        let leftWrapper = document.querySelector(".leftWrapper")
        let loginsuccess = document.querySelector(".loginsuccess")
        leftWrapper.style.display = "none"
        loginsuccess.style.display = "block"
        let mainBtns = document.querySelectorAll('.mainBtns')
        for(let i = 0; i<postWritesArr.length;i++){
            mainBtns[i].style.display = "block"
        }
        }
    }
}
//키 다 입력시 길이 0이면 비활성화
forlogininput[0].onkeyup = function(){
    if(forlogininput[0].value.length==0){
        forloginbutton.classList.remove("forloginactive")
    }
}
forlogininput[1].onkeydown = function(e){
    //비밀번호입력시 아이디에 입력되있으면 클래스리스트 추가
    if(!forlogininput[0].value.length==0){
        if(!forloginbutton.classList.contains("forloginactive")){
        forloginbutton.classList.add("forloginactive")}
    }
    else{
        forloginbutton.classList.remove("forloginactive")
    }
    //엔터로 로그인
    if(e.keyCode == 13){
        if(forlogininput[0].value == "admin" && forlogininput[1].value == "admin"){
            alert("테스트 모드입니다.")
        let leftWrapper = document.querySelector(".leftWrapper")
        let loginsuccess = document.querySelector(".loginsuccess")
        leftWrapper.style.display = "none"
        loginsuccess.style.display = "block"
        let mainBtns = document.querySelectorAll('.mainBtns')
        for(let i = 0; i<postWritesArr.length;i++){
            mainBtns[i].style.display = "block"
        }
        }
    }
}
//키 다 입력시 길이 0이면 비활성화
forlogininput[1].onkeyup = function(){
    if(forlogininput[1].value.length==0){
        forloginbutton.classList.remove("forloginactive")
    }
}
//로그인하기 버튼 클릭
forloginbutton.onclick= function(){
    if(!forloginbutton.classList.contains("forloginactive")){
        return
    }
    else if(forlogininput[0].value == "admin" && forlogininput[1].value == "admin"){
        alert("테스트 모드입니다.")
        let leftWrapper = document.querySelector(".leftWrapper")
        let loginsuccess = document.querySelector(".loginsuccess")
        leftWrapper.style.display = "none"
        loginsuccess.style.display = "block"
        let mainBtns = document.querySelectorAll('.mainBtns')
        for(let i = 0; i<postWritesArr.length;i++){
            mainBtns[i].style.display = "block"
        }
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