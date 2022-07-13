const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

function radian(angle) {
    return (angle * Math.PI) / 180;
}

const ballRadius = 10;
const barWidth = 100;
const barHeight = 15;
// let ballStart = { x: ballRadius, y: ballRadius };
let ballStart = { x: 300, y: ballRadius };
let ballPos = { x: 0, y: 0 };
let Xspeed = 3;
let Yspeed = 3;

let barStart = { x: canvas.width / 2 - barWidth / 2, y: canvas.height - barHeight - 20 };
console.log(barStart.x);

function ballDraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballPos.x = ballStart.x += Xspeed;
    ballPos.y = ballStart.y += Yspeed;
    if (ballPos.x > canvas.width - ballRadius) {
        Xspeed -= Xspeed * 2;
    } else if (ballPos.x < ballRadius) {
        Xspeed += Xspeed * -2;
    }
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
    context.fillRect(barStart.x, barStart.y, barWidth, barHeight);

    requestAnimationFrame(ballDraw);
}

ballDraw();

window.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            console.log('왼쪽키눌림');
            break;

        case 38:
            console.log('위쪽키눌림');
            break;
        case 39:
            console.log('오른쪽키눌림');
            break;
        case 40:
            console.log('아래쪽키눌림');
            break;
    }
};
