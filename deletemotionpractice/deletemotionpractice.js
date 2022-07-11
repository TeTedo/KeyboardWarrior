let Wrap = document.querySelector('.Wrap')
let block = document.querySelectorAll('.block')

for(let i = 0; i <400; i++){
    let tempblock = document.createElement('div')
    tempblock.classList.add('block')
    let randNum = Math.random() * 5
    Wrap.appendChild(tempblock)
    tempblock.style.animationDuration = randNum + 's'
}