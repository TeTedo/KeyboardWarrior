//스크롤 이벤트







// //애니메이션 넣어주는거 안먹음
// let webkitInFun = function(queryName,webkitName,time){
//     queryName.style.webkitAnimationName = webkitName
//     queryName.style.webkitAnimationDuration = time
// }
//스크롤시 옆으로 쑥 나오는거
let distinguishScroll = 0;
window.onscroll = function(){
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
        //바퀴 그려주기
        let contentTire = postWritesArr[i].querySelector('.contentTire');
        let contentTireCtx =contentTire.getContext('2d')
        let contentTransPorter = postWritesArr[i].querySelector('.contentTransPorter');
        let contentTransPorterCtx = contentTransPorter.getContext('2d');
        let degree = 0;
        
        let radian = function(degree){
            return degree*(Math.PI/180);
        }
        
        let contentTireDrawFun = function(stop){
            if(stop == "stop"){
                return
            }
            let img = new Image();
            img.src = "../images/contentTire.png"
            img.onload = function(){
            //첫번째 바퀴
            contentTireCtx.clearRect(0,0,contentTire.width,contentTire.height);
            contentTireCtx.save();
            contentTireCtx.translate(85,95);
            contentTireCtx.rotate(-radian(degree))
            contentTireCtx.drawImage(img,-25,-25,50,50);
            contentTireCtx.restore();
            //두번째 바퀴
            contentTireCtx.save();
            contentTireCtx.translate(225,95);
            contentTireCtx.rotate(-radian(degree))
            contentTireCtx.drawImage(img,-25,-25,50,50);
            contentTireCtx.restore();
        
            degree += 1;
            if(degree == 180){
                return
            }
            
            requestAnimationFrame(contentTireDrawFun);
            
            }
        }

        let postWritesArrTop = postWritesArr[i].getBoundingClientRect().top;
        let postWritesArrBottom = postWritesArr[i].getBoundingClientRect().bottom;
        //스크롤 올릴때
        if(distinguishScrollUpDown == "Up"){
            if(postWritesArrTop>15){
                
                postWritesArr[i].style.webkitAnimationName = "fadein"
                postWritesArr[i].style.webkitAnimationDuration = "3s"
                postWriteShadow[i].style.webkitAnimationName = "fadeinShadow"
                postWriteShadow[i].style.webkitAnimationDuration = "3s"
                postWritesArr[i].style.opacity = 1;
                contentTireDrawFun();
            }
            if(postWritesArrTop>1650){
                postWritesArr[i].style.webkitAnimationName = ""
                postWriteShadow[i].style.webkitAnimationName = ""
                postWritesArr[i].style.opacity = 0;
                contentTireDrawFun("stop")
            }
        }
    
        //스크롤 내릴때
        else{
            if(postWritesArrBottom<1420){ 
                postWritesArr[i].style.webkitAnimationName = "fadein"
                postWritesArr[i].style.webkitAnimationDuration = "3s"
                postWriteShadow[i].style.webkitAnimationName = "fadeinShadow"
                postWriteShadow[i].style.webkitAnimationDuration = "3s"
                postWritesArr[i].style.opacity = 1;
                contentTireDrawFun();
            }
            if(postWritesArrBottom<150){
                postWritesArr[i].style.webkitAnimationName = ""
                postWriteShadow[i].style.webkitAnimationName = ""
                postWritesArr[i].style.opacity = 0;
                contentTireDrawFun("stop")
            }
        }
    } 
}