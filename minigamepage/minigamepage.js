let wholeBody = document.querySelector(".wholeBody");
let minigamepage = document.querySelector(".minigamepage");
let maincanvas = document.querySelector(".maincanvas");

wholeBody.style.backgroundImage = "url('../images/welcomeimg1.png')"
let imgindex = 1;

//배경확대
let imgcloseUpindex = 1;
let closeUpBackground = setInterval(()=>{
    wholeBody.style.backgroundSize = `${imgcloseUpindex}%`
    imgcloseUpindex++;
    if(imgcloseUpindex == 400){
        clearInterval(closeUpBackground);
    }
},1)


//배경 바꾸기
let changeBackground = setInterval(()=>{
    wholeBody.style.backgroundImage = `url("../images/welcomeimg${imgindex}.png")`
    imgindex++;
    if(imgindex == 6){
        imgindex = 1;
    }
    if(imgcloseUpindex == 400){
        minigamepage.style.display = "block"
        setTimeout(()=>{
            minigamepage.style.width = "100%"
            minigamepage.style.height = "100%"
            minigamepage.style.top = 0;
            minigamepage.style.left = 0;
            minigamepage.style.backgroundColor = "white";
        },150); 
        setTimeout(()=>{
            clearInterval(changeBackground);
        },2000); 
        wholeBody.backgroundImage = "none"
    }
},130)

