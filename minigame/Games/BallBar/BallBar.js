const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

function radian(angle) {
    return (angle * Math.PI) / 180;
}

const barWidth = 100;
const barHeight = 20;
let barXMove = 0;
let barYMove = 0;
let barStart = { x: canvas.width / 2 - barWidth / 2, y: canvas.height - barHeight - 20 };
let barXPos;

const ballRadius = 10;
let ballStart = { x: barStart.x + barWidth / 2, y: barStart.y - barHeight - 15 };
let ballPos = { x: 0, y: 0 };
let Xspeed = 3;
let Yspeed = 3;

function ballDraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballPos.x = ballStart.x += Xspeed;
    ballPos.y = ballStart.y += Yspeed;

    // 벽에 부딛히면 튀기는 부분
    if (ballPos.x > canvas.width - ballRadius) {
        Xspeed -= Xspeed * 2;
    } else if (ballPos.x < ballRadius) {
        Xspeed += Xspeed * -2;
    }
    // 막대에 부딛히면 튀기는 부분
    if (
        ballPos.y >= barStart.y - ballRadius &&
        ballPos.x >= barStart.x + barXMove - ballRadius &&
        ballPos.x <= barStart.x + barXMove + barWidth + ballRadius
    ) {
        Yspeed -= Yspeed * 2;
    }
    //바닦에 부딛히면 튀기는 부분
    if (ballPos.y > canvas.height - ballRadius) {
        Yspeed -= Yspeed * 2;
    } else if (ballPos.y < ballRadius) {
        Yspeed += Yspeed * -2;
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

    // 막대 그리는 부분
    context.fillRect(barStart.x + barXMove, barStart.y + barYMove, barWidth, barHeight);

    requestAnimationFrame(ballDraw);
}

ballDraw();

//벽돌 그리는 부분
const brickWidth = 100;
const brickHeight = 20;
const bricksBundleHeight = (canvas.height * 2) / 5;
let bricksCol = 0;
let bricksRow = 0;

function bricksDraw() {
    for (let i = 0; i < bricksBundleHeight / brickHeight; i++) {
        for (let k = 0; k < canvas.width / brickWidth; k++) {
            console.log('ok');
            context.strokeRect(k * brickWidth, i * brickHeight, brickWidth, brickHeight);
        }
    }
    requestAnimationFrame(bricksDraw);
}
bricksDraw();

window.onkeydown = function (e) {
    barXpos = barStart.x + barXMove;
    switch (e.keyCode) {
        case 37:
            console.log('왼쪽키눌림');
            if (barXpos <= 0) {
                return;
            }
            barXMove -= 20;
            break;

        case 38:
            console.log('위쪽키눌림');
            break;
        case 39:
            console.log('오른쪽키눌림');
            if (barXpos >= canvas.width - barWidth) {
                return;
            }
            barXMove += 20;
            break;
        case 40:
            console.log('아래쪽키눌림');
            break;
    }
};
