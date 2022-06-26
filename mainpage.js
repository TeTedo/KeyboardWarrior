window.onscroll = function(){
    let main = document.querySelector('.main div:first-child') 
    if ( main.getBoundingClientRect().top < 150){
       document.querySelector('.scrollContents').style.zIndex = '1' 
       scrollBtn.style.opacity = '1'
       scrollBtn.style.top = '700px'
       setTimeout(()=>{
        scrollBtn.style.top = '645px'
       },500)
        
       
    }
    else{
        scrollBtn.style.opacity = '0'
        document.querySelector('.scrollContents').style.zIndex = '-999' 
        
        scrollBtn.style.top = '550px'
        
    }
}

scrollBtn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"})
}

