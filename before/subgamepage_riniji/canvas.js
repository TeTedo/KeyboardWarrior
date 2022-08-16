//스크롤 이벤트


// //애니메이션 넣어주는거 안먹음
// let webkitInFun = function(queryName,webkitName,time){
//     queryName.style.webkitAnimationName = webkitName
//     queryName.style.webkitAnimationDuration = time
// }


//스크롤시 옆으로 쑥 나오는거


let distinguishScroll = 0;
let savePlace = document.querySelector('.savePlace')
//스크롤 이벤트용
for(let i =0; i<postWritesArr.length;i++){
    toStopDrawFun.push("")
}

window.onscroll = function(){
    let main = document.querySelector(".main div:first-child");
    if (main.getBoundingClientRect().top < 100) {
        document.querySelector(".scrollContents").style.zIndex = "1";
        scrollBtn.style.opacity = "1";
        savePlace.style.opacity = "1";
        scrollBtn.style.top = "400px";
        setTimeout(() => {
        scrollBtn.style.top = "340px";
        }, 500);
    } 
    else {
        scrollBtn.style.opacity = "0";
        savePlace.style.opacity = "0";
        document.querySelector(".scrollContents").style.zIndex = "-999";

        scrollBtn.style.top = "300px";
    }
    let distinguishScrollUpDown;
    //스크롤 업다운 구별
    if(distinguishScroll<window.scrollY){
        distinguishScrollUpDown = "Down"
    }
    else{
        distinguishScrollUpDown = "Up"
    }
    distinguishScroll = window.scrollY;
    //스크롤 업다운 구별

    for(let i = 0; i<postWritesArr.length;i++){
        // //바퀴 그려주기
        // let contentTire = postWritesArr[i].querySelector('.contentTire');
        // let contentTireCtx =contentTire.getContext('2d')
        // let degree = 0;
        
        // let radian = function(degree){
        //     return degree*(Math.PI/180);
        // }
        
        // let contentTireDrawFun = function(stop){
        //     if(stop == "stop"){
        //         return
        //     }
        //     let img = new Image();
        //     img.src = "../images/contentTire.png"
        //     img.onload = function(){
        //         contentTire.style.display = "block"
        //     //첫번째 바퀴
        //     contentTireCtx.clearRect(0,0,contentTire.width,contentTire.height);
        //     contentTireCtx.save();
        //     contentTireCtx.translate(85,95);
        //     contentTireCtx.rotate(-radian(degree))
        //     contentTireCtx.drawImage(img,-25,-25,50,50);
        //     contentTireCtx.restore();
        //     //두번째 바퀴
        //     contentTireCtx.save();
        //     contentTireCtx.translate(225,95);
        //     contentTireCtx.rotate(-radian(degree))
        //     contentTireCtx.drawImage(img,-25,-25,50,50);
        //     contentTireCtx.restore();
            
        //     degree += 1;
        //     if(degree == 180){
        //         contentTire.style.display = "none"
        //         return
        //     }
            
        //     requestAnimationFrame(contentTireDrawFun);
            
        //     }
        // }

        // //transporter 그리기
        // let contentTransPorter = postWritesArr[i].querySelector('.contentTransPorter');
        // let contentTransPorterCtx = contentTransPorter.getContext('2d');
        




        //스크롤 이벤트
        let postWritesArrTop = postWritesArr[i].getBoundingClientRect().top;
        let postWritesArrBottom = postWritesArr[i].getBoundingClientRect().bottom;
        //스크롤 올릴때
        if(distinguishScrollUpDown == "Up"){
            //효과 off
            if(window.innerHeight- postWritesArrTop<50){
                postWritesArr[i].style.webkitAnimationName = ""
                postWriteShadow[i].style.webkitAnimationName = ""
                postWritesArr[i].style.webkitAnimationDuration = ""
                postWriteShadow[i].style.webkitAnimationDuration = ""
                postWritesArr[i].style.opacity = 0;
                // contentTireDrawFun("stop")
                // toStopDrawFun[i] = 0;
            }
            // //효과 on
            // else if(postWritesArrTop>15){
                
            //     postWritesArr[i].style.webkitAnimationName = "fadein"
            //     postWritesArr[i].style.webkitAnimationDuration = "3s"
            //     postWriteShadow[i].style.webkitAnimationName = "fadeinShadow"
            //     postWriteShadow[i].style.webkitAnimationDuration = "3s"
            //     postWritesArr[i].style.opacity = 1;
            //     if(toStopDrawFun[i] ==1){
            //         return
            //     }
            //     contentTireDrawFun();
            //     toStopDrawFun[i] = 1;
            // }   
        }
    
        //스크롤 내릴때
        else{
            //효과 off
            // if(postWritesArrBottom<150){
            //     postWritesArr[i].style.webkitAnimationName = ""
            //     postWriteShadow[i].style.webkitAnimationName = ""
            //     postWritesArr[i].style.opacity = 0;
            //     toStopDrawFun[i] = 0;
            // }
            // //효과 on
            // else
            
            
             if(window.innerHeight- postWritesArrTop>50){ 
                postWritesArr[i].style.webkitAnimationName = "fadein"
                postWritesArr[i].style.webkitAnimationDuration = "3s"
                postWriteShadow[i].style.webkitAnimationName = "fadeinShadow"
                postWriteShadow[i].style.webkitAnimationDuration = "3s"
                postWritesArr[i].style.opacity = 1;
                if(toStopDrawFun[i] ==1){
                    return
                }
                // contentTireDrawFun();
                // toStopDrawFun[i] = 1;
            }
            // else{
            //     postWritesArr[i].style.webkitAnimationName = ""
            //     postWriteShadow[i].style.webkitAnimationName = ""
            //     postWritesArr[i].style.webkitAnimationDuration = ""
            //     postWriteShadow[i].style.webkitAnimationDuration = ""
            //     postWritesArr[i].style.opacity = 0;
            // }
        }
    } 
}

//스크롤 위치 저장
let savePoint = 0;
savePlace.onclick = function(){
    savePoint = document.body.getBoundingClientRect().top
}

//스크롤 버튼 클릭시
scrollBtn.onclick = function (e) {
    e.preventDefault(); //a태그가 비어있으면 새로고침되는거 방지
    window.scrollTo({ top: -savePoint, behavior: "smooth" });
  };