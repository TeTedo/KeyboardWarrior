let mainPageIntro = document.querySelector('.mainPageIntro')
let block = document.querySelectorAll('.block')
let mainPageIntroLogo = document.querySelector('.mainPageIntroLogo')
mainPageIntroLogo.innerHTML = mainPageIntroLogo.textContent.replace(/\S/g,"<span>$&</span>")
let smokeWords = mainPageIntroLogo.querySelectorAll('span')
for(let i = 0; i <400; i++){
    let tempblock = document.createElement('div')
    tempblock.classList.add('block')
    let randNum = Math.random() * 5
    mainPageIntro.appendChild(tempblock)
    tempblock.style.animationDuration = randNum + 's'
}

setTimeout(()=>{
    for(let i = 0;i<smokeWords.length;i++){
        let randNum = Math.random() * 3.5
        smokeWords[i].style.animationName = "smokewords";
        smokeWords[i].style.animationDuration = randNum + 's';
        smokeWords[i].style.opacity = 0;
    }
},5500)

setTimeout(()=>{
    mainPageIntro.style.animationName = "deletewords"
    mainPageIntro.style.animationDuration = "2s"
},7500)

setTimeout(()=>{
    mainPageIntro.style.display = "none"
},8500)