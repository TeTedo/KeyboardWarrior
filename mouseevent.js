//우클릭 확대이벤트
window.onmousedown = function(e){
    
    console.log(e.clientX)
    console.log(e.clientY)
if(e.which ==3 || e.button ==2 ){
    if(document.body.style.zoom == 1.5){
        document.body.style.zoom = 1
        document.body.style.top = 0
    document.body.style.left = 0
        return
    }
    document.body.style.top = -e.clientY  + 'px'
    document.body.style.left = -e.clientX + 'px'
    document.body.style.top = parseInt(document.body.style.top) + window.innerHeight*0.25 + 'px'
    document.body.style.left = parseInt(document.body.style.left) + window.innerWidth*0.5 + 'px'
    document.body.style.zoom = 1.5
    
}
}
//기본 우클릭 이벤트 막기
window.oncontextmenu = function(){
    return false
}
