let profileShortImgWrap = document.querySelector('.profileShortImgWrap');
let clickImg = document.querySelector('.profileCircleImg img');
let profileCircleImgWrap = document.querySelector('.profileCircleImgWrap')


let moveCircleImg = setInterval(()=>{
    let randnumX = Math.random()*930;
    let randnumY = Math.random()*600;
    let randnumdeg = Math.random()*360;
    profileShortImgWrap.style.transform = `translate(${randnumX}px,${randnumY}px) rotate(${randnumdeg}deg)`
},700)

clickImg.onclick = function(){
    clearInterval(moveCircleImg);
    profileShortImgWrap.style.width = '100%'
    profileShortImgWrap.style.height = 'auto'
    profileShortImgWrap.style.borderRadius = '0'
    profileShortImgWrap.style.transform = `translate(0px,0px) rotate(0deg)`
    profileShortImgWrap.style.transition = '2s'
    profileCircleImgWrap.style.transform = "translate(50px,-75px)"
}