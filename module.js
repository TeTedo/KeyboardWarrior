//=============홈페이지 이펙트=====================================
//스크롤 리모컨 버튼
window.onscroll = function(){
    let main = document.querySelector('.main div:first-child') 
    if ( main.getBoundingClientRect().top < 120){
        document.querySelector('.scrollContents').style.zIndex = '1' 
        scrollBtn.style.opacity = '1'
        scrollBtn.style.top = '400px'
        setTimeout(()=>{
            scrollBtn.style.top = '340px'
        },500)
        
        
    }
    else{
        scrollBtn.style.opacity = '0'
        document.querySelector('.scrollContents').style.zIndex = '-999' 
        
        scrollBtn.style.top = '300px'
        
    }
}

scrollBtn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"})
}

//왼쪽 메뉴바 효과
let leftMenuCount = document.querySelector('.leftMenu').childElementCount
allLeftMenuDiv=document.querySelectorAll('.leftMenudiv')

for (let i = 1; i<=leftMenuCount; i++){
    document.querySelector(`.leftMenu li:nth-child(${i})`).onmouseenter = function(){
        for(let i = 1; i<=leftMenuCount; i++){
            if(allLeftMenuDiv[i-1].classList.contains('start')){
                allLeftMenuDiv[i-1].classList.remove('start')
            }
            if(allLeftMenuDiv[i-1].classList.contains('active')){
                allLeftMenuDiv[i-1].classList.remove('active')
            }
        }   
        allLeftMenuDiv[i-1].classList.add('start')
        setTimeout(() => {
            allLeftMenuDiv[i-1].classList.add('active')
        }, 100);
    }
}

document.querySelector(`.leftMenu`).onmouseleave = function(){
    for(let i = 1; i<=leftMenuCount; i++){
        if(allLeftMenuDiv[i-1].classList.contains('start')){
            allLeftMenuDiv[i-1].classList.remove('start')
        }
        if(allLeftMenuDiv[i-1].classList.contains('active')){
            allLeftMenuDiv[i-1].classList.remove('active')
        }
    }   
}
//======================================================================

let DivGnb=(
    function(){
        function DivGnb(super_id){
            this.init(super_id)
        }
        DivGnb.prototype.init = function(super_id){
            // let id = super_id
            if(super_id ==="" || super_id === null){return}
            let temp = document.createElement('div')
            super_id.appendChild(temp);
         }
         return DivGnb
    }
)();

let PostGnb=(
    function(){
        function PostGnb(super_id,text,url){
            this.init(super_id,text,url)
        }
        PostGnb.prototype.init = function(super_id,text,url){
            if(super_id ==="" || super_id === null){return}

            let postWrite = document.createElement('div')
            postWrite.classList.add('postWrite')
            let postWriteWrapper = document.createElement('span')
            postWriteWrapper.classList.add('postWriteWrapper')
            let profileImg = document.createElement('a')
            profileImg.classList.add('profileImg')
            let postWriteContents = document.createElement('span')
            postWriteContents.classList.add('postWriteContents')
            let postWriteContentsBtns = document.createElement('span')
            postWriteContentsBtns.classList.add('postWriteContentsBtns')
            let deleteBtn = document.createElement('button')
            let modifyBtn = document.createElement('button')
            let modifyTextarea = document.createElement('textarea')
            let postWriteContentsText = document.createElement('span')
            postWriteContentsText.classList.add('postWriteContentsText')
            
            
            
            super_id.appendChild(postWrite);
            postWrite.appendChild(postWriteWrapper)
            postWriteWrapper.appendChild(profileImg)
            postWriteWrapper.appendChild(postWriteContents)
            postWriteContents.appendChild(postWriteContentsBtns)
            postWriteContentsBtns.appendChild(deleteBtn)
            postWriteContentsBtns.appendChild(modifyBtn)
            postWriteContents.appendChild(modifyTextarea)
            postWriteContents.appendChild(postWriteContentsText)
            
            deleteBtn.innerHTML = "삭제"
            modifyBtn.innerHTML = "수정"
            modifyTextarea.setAttribute('readonly','')
            modifyTextarea.onkeydown=('resize(this)')
            modifyTextarea.setAttribute('onkeyup','resize(this)')
            modifyTextarea.setAttribute('rows','1')
            postWriteContentsText.innerHTML = text
            document.querySelector('.postWriteContentsText')
            
            if(!(url === undefined)){
            let postImg = document.createElement('img')
            postWriteContents.appendChild(postImg)
            postImg.src = url
            }
         }
         return PostGnb
    }
)();