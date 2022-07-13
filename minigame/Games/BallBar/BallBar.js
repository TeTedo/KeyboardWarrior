const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

function radian(angle) {
    return (angle * Math.PI) / 180;
}

//막대 변수들
const barWidth = 125;
const barHeight = 20;
let barXMove = 0;
let barYMove = 0;
let barStart = { x: canvas.width / 2 - barWidth / 2, y: canvas.height - barHeight - 20 };
let barSpeed = 20;
let barXPos = barStart.x + barXMove;
//공 변수들
const ballRadius = 10;
let ballStart = { x: barStart.x + barWidth / 2, y: barStart.y - barHeight - 15 };
let ballPos = { x: 0, y: 0 };
let Xspeed = 3;
let Yspeed = 3;
//벽돌 변수들
const brickWidth = 100;
const brickHeight = 20;
const bricksBundleHeight = (canvas.height * 2) / 5;
let bricksCol = 0;
let bricksRow = 0;
let tempArr = new Array()
let bricksPosArr = new Array()
for (let i = 0; i < bricksBundleHeight / brickHeight; i++) {
    for (let k = 0; k < canvas.width / brickWidth; k++) {
        tempArr = []
        tempArr.push(k*brickWidth)
        tempArr.push(i*brickHeight)
        bricksPosArr.push(tempArr)        
    }
}

//반복그리기
function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.beginPath()
    // context.arc(0,0,10,0,radian(360),false)
    // context.fill()

    ballDraw()
    barDraw()
    bricksDraw();

    requestAnimationFrame(draw);
}
draw();

//공그리기 펑션
function ballDraw() {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    ballPos.x = ballStart.x += Xspeed;
    ballPos.y = ballStart.y += Yspeed;

    //천장에 부딪치면 튀기는 부분
    if (ballPos.y - ballRadius <= 0) {
        Yspeed += Yspeed * -2;
    }
    //바닦에 부딪치는 경우
    else if (ballPos.y + ballRadius >= canvas.height) {
        alert('죽음')
        barXMove = 0;
        barYMove = 0;
        barStart = { x: canvas.width / 2 - barWidth / 2, y: canvas.height - barHeight - 20 }
        barSpeed = 20;
        barXPos = barStart.x + barXMove;
        ballStart = { x: barStart.x + barWidth / 2, y: barStart.y - barHeight - 15 };
        Xspeed = 3;
        Yspeed = 3;
    }
    // 좌우벽에 부딪치면 튀기는 부분
    if (ballPos.x + ballRadius >= canvas.width) {
        Xspeed -= Xspeed * 2;
    } else if (ballPos.x - ballRadius <= 0) {
        Xspeed += Xspeed * -2;
    }
    // 막대에 부딪치면 튀기는 부분
    if (
        ballPos.y + ballRadius >= barStart.y  &&
        ballPos.y + ballRadius <= barStart.y+barHeight/2  &&
        ballPos.x >= barXPos &&
        ballPos.x <= barXPos + barWidth
    ) {
        Yspeed -= Yspeed * 2;
    }
    //벽돌에 부딪치면 튀기는 부분
    for(let i = 0; i<bricksPosArr.length; i++){
        if (ballPos.y <= bricksPosArr[i][1] + brickHeight + ballRadius &&
            ballPos.x >= bricksPosArr[i][0] &&
            ballPos.x <= bricksPosArr[i][0] + brickWidth){
                bricksPosArr[i][0] = -9999
                // bricksPosArr[i][1] = 300
                Yspeed -= Yspeed * 2;
            }
    }

    // 공그리는부분
    context.beginPath();
    context.arc(
        (ballStart.x += Xspeed),
        (ballStart.y += Yspeed),
        ballRadius,
        0,
        radian(360),
        false
    );
    context.fill();
    // requestAnimationFrame(ballDraw)
}
// ballDraw()

//막대그리기 펑션
function barDraw(){
    context.fillRect(barStart.x + barXMove, barStart.y + barYMove, barWidth, barHeight);
    requestAnimationFrame(barDraw)
}

//벽돌 그리기 펑션
function bricksDraw() {
    for(let i = 0; i<bricksPosArr.length; i++){
        context.strokeRect(bricksPosArr[i][0], bricksPosArr[i][1], brickWidth, brickHeight)
    }
}

//막대 움직이는 이벤트
window.onkeydown = function (e) {
    
    console.log(barXPos)
    
    switch (e.keyCode) {
        case 37:
            if (barXPos <= 0) {
                return;
            }
            barXMove -= barSpeed;
            break;

        case 38:
            console.log('위쪽키눌림');
            break;
        case 39:
            if (barXPos >= canvas.width - barWidth) {
                return;
            }
            barXMove += barSpeed;
            break;
        case 40:
            console.log('아래쪽키눌림');
            break;
    }
    barXPos = barStart.x + barXMove;
};

