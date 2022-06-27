//스크롤 버튼
window.onscroll = function(){
    let main = document.querySelector('.main div:first-child') 
    if ( main.getBoundingClientRect().top < 150){
       document.querySelector('.scrollContents').style.zIndex = '1' 
       scrollBtn.style.opacity = '1'
       scrollBtn.style.top = '605px'
       setTimeout(()=>{
        scrollBtn.style.top = '540px'
       },500)
        
       
    }
    else{
        scrollBtn.style.opacity = '0'
        document.querySelector('.scrollContents').style.zIndex = '-999' 
        
        scrollBtn.style.top = '525px'
        
    }
}

scrollBtn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"})
}

// console.log(document.querySelector(`.leftMenu li a:nth-child(${1})`).classList.contains('hello'))

//사이드메뉴 
let leftMenuCount = document.querySelector('.leftMenu').childElementCount
console.log(leftMenuCount)
console.log(document.querySelector(`.leftMenudiv:nth-child(${2})`))
allDiv=document.querySelectorAll('.leftMenudiv')
console.log(allDiv[0])
console.log(allDiv[1])
console.log(allDiv[2])

for (let i = 1; i<=leftMenuCount; i++){
    document.querySelector(`.leftMenu li:nth-child(${i})`).onmouseenter = function(){
        for(let i = 1; i<=leftMenuCount; i++){
            console.log(leftMenuCount)
            console.log(i)
            if(allDiv[i-1].classList.contains('start')){
                allDiv[i-1].classList.remove('start')
            }
            if(allDiv[i-1].classList.contains('active')){
                allDiv[i-1].classList.remove('active')
            }
        }   
        allDiv[i-1].classList.add('start')
        setTimeout(() => {
            allDiv[i-1].classList.add('active')
        }, );
    }

    document.querySelector(`.leftMenu li:nth-child(${i})`).onmouseleave = function(){
        console.log('나감')
        for(let i = 1; i<=leftMenuCount; i++){
            if(allDiv[i-1].classList.contains('start')){
                allDiv[i-1].classList.remove('start')
            }
            if(allDiv[i-1].classList.contains('active')){
                allDiv[i-1].classList.remove('active')
            }
        }   
    }
}

    // document.querySelectorAll(`.leftMenu li:nth-child(${i})`).onmouseleave = function(){
    //     for(let i = 1; i<=leftMenuCount; i++){
    //         console.log('나감')
    //         if(document.querySelector(`.leftMenu li:nth-child(${i})`).classList.contains('start')){
    //             document.querySelector(`.leftMenu li:nth-child(${i})`).classList.remove('start')
    //         }
    //         if(document.querySelector(`.leftMenu li:nth-child(${i})`).classList.contains('active')){
    //             document.querySelector(`.leftMenu li:nth-child(${i})`).classList.remove('active')
    //         }
    //     }   
    // }

// document.querySelectorAll('.leftMenu li').forEach((e,index)=>{
//     console.log(e)
//     console.log(index)
// })

