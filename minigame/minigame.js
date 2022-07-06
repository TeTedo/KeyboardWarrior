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
        
    }
}
