const canvas = document.querySelector('.canvas');
const context =  canvas.getContext('2d');
const redBallon = new Image()
const blueBallon = new Image()
const greenBallon = new Image()
const balloonSize = 150

redBallon.src = '/balloon_effect/images/red.png'
blueBallon.src = '/balloon_effect/images/blue.png'
greenBallon.src = '/balloon_effect/images/green.png'

let balloonPosXArr = new Array()
let balloonPosYArr = new Array()


let balloonAmount = 30
for (let i = 0; i <balloonAmount; i++){
    balloonPosXArr.push(Math.floor(Math.random()*(canvas.width)))
    balloonPosYArr.push(Math.floor(Math.random()*(canvas.width)))
}

balloonPosYArr.sort(function(a,b){
    return a-b;
})

console.log(balloonPosYArr)

redBallon.onload = function(){
    
    let balloonMoveAdd = 0
    let mousePosX
    let mousePosY
    function balloonMove(){  
        context.clearRect(0,0,canvas.width,canvas.height)

        for(let i = 0; i<balloonAmount/3; i++){
            context.drawImage(redBallon,balloonPosXArr[i*3],balloonPosYArr[i*3]-balloonMoveAdd,balloonSize,balloonSize)
            context.drawImage(blueBallon,balloonPosXArr[i*3+1],balloonPosYArr[i*3+1]-balloonMoveAdd,balloonSize,balloonSize)
            context.drawImage(greenBallon,balloonPosXArr[i*3+2],balloonPosYArr[i*3+2]-balloonMoveAdd,balloonSize,balloonSize)
        }

        
        if (balloonPosYArr[balloonAmount-1]-balloonMoveAdd<0-balloonSize){
            console.log('끝남')
            return
        }
        balloonMoveAdd+=5
        requestAnimationFrame(balloonMove)
    }
    
    balloonMove()
    
    canvas.onclick = function(e){
        mousePosX = e.offsetX
        mousePosY = e.offsetY
        console.log(balloonMoveAdd)
        
        for(let i = 0; i<balloonAmount; i++){
            if( mousePosX>balloonPosXArr[i] &&
                mousePosX<balloonPosXArr[i]-balloonSize&&
                mousePosY<balloonPosYArr[i]-balloonMoveAdd&&
                mousePosY>balloonPosYArr[i]-balloonMoveAdd-balloonSize
                ){
                    console.log('풍선클릭됨')
                }
            else{
                console.log('딴데클릭됨')
                console.log(balloonPosYArr[balloonAmount-1]-balloonMoveAdd)
            }
        }
    }

}


// let balloonPosX 
// let randomPosX = function(){
//     balloonPosX = Math.floor(Math.random()*(canvas.width))
//     return balloonPosX
// }

// let balloonPosY 
// let randomPosY = function(){
//     balloonPosY = Math.floor(Math.random()*(canvas.height))
//     return balloonPosY
// }

// redBallon.onload = function(){
    
//     let ballonMoveAdd = 0
//     randomPosX()
//     randomPosY()
    
//     function balloonMove(){  
        
//         context.clearRect(0,0,canvas.width,canvas.height)
//         context.drawImage(redBallon,balloonPosX,balloonPosY-ballonMoveAdd,balloonSize,balloonSize)

//         let balloonCurrentPos = balloonPosY-ballonMoveAdd
//         if (balloonCurrentPos<0-balloonSize){
//             ballonMoveAdd = 0
//             return
//         }
            
//         ballonMoveAdd+=5
//         requestAnimationFrame(balloonMove)
//     }

//     balloonMove()
    

// }

// blueBallon.onload = function(){
//     context.drawImage(blueBallon,150,150,balloonSize,balloonSize)

// }
// greenBallon.onload = function(){
//     context.drawImage(greenBallon,300,300,balloonSize,balloonSize)

// }
