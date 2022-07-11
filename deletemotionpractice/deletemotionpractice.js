let mainPageIntro = document.querySelector('.mainPageIntro')
let block = document.querySelectorAll('.block')

for(let i = 0; i <400; i++){
    let tempblock = document.createElement('div')
    tempblock.classList.add('block')
    let randNum = Math.random() * 5
    mainPageIntro.appendChild(tempblock)
    tempblock.style.animationDuration = randNum + 's'
}


setTimeout(()=>{
    mainPageIntro.style.animationName = "deletewords"
    mainPageIntro.style.animationDuration = "2s"
},5500)

setTimeout(()=>{
    mainPageIntro.style.display = "none"
},7500)