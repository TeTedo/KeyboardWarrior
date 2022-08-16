const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const redBallon = new Image();
const blueBallon = new Image();
const greenBallon = new Image();
const balloonPop = new Image();
const balloonWidth = 88;
const balloonHeight = 150;
const popWidth = 150;
const popHeight = 120;

redBallon.src = "/balloon_effect/images/red.png";
blueBallon.src = "/balloon_effect/images/blue.png";
greenBallon.src = "/balloon_effect/images/green.png";
balloonPop.src = "/balloon_effect/images/pop.png";

let balloonPosXArr = new Array();
let balloonPosYArr = new Array();

let balloonAmount = 30;

function balloonInit() {
  balloonPosXArr = [];
  balloonPosYArr = [];

  for (let i = 0; i < balloonAmount; i++) {
    balloonPosXArr.push(Math.abs(Math.random() * canvas.width - balloonWidth));
    balloonPosYArr.push(Math.random() * canvas.height + canvas.height / 2);
  }

  //풍선Y좌표 배열 오름차순 정렬
  balloonPosYArr.sort(function (a, b) {
    return a - b;
  });
  console.log(balloonPosXArr);
  console.log(balloonPosYArr);
}

redBallon.onload = function () {
  let redSpeed = 0;
  let blueSpeed = 0;
  let greenSpeed = 0;
  let balloonScore = 0;
  let mousePosX;
  let mousePosY;
  function balloonDraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "50px Noto Sans KR";
    context.fillText("점수: " + balloonScore, canvas.width / 2, 200);
    for (let i = 0; i < balloonAmount / 3; i++) {
      context.drawImage(
        redBallon,
        balloonPosXArr[i * 3 + 2],
        balloonPosYArr[i * 3 + 2] - redSpeed,
        balloonWidth,
        balloonHeight
      );
      context.drawImage(
        blueBallon,
        balloonPosXArr[i * 3 + 1],
        balloonPosYArr[i * 3 + 1] - blueSpeed,
        balloonWidth,
        balloonHeight
      );
      context.drawImage(
        greenBallon,
        balloonPosXArr[i * 3],
        balloonPosYArr[i * 3] - greenSpeed,
        balloonWidth,
        balloonHeight
      );
    }
    if (balloonPosYArr[balloonAmount - 1] - greenSpeed < 0 - balloonHeight) {
      canvas.style.display = "none";
      canvas.style.zIndex = "-9999";
      canvas.style.backgroundColor = "transparent";
      console.log("끝남");
      return;
    }
    redSpeed += 4;
    blueSpeed += 3;
    greenSpeed += 2;
    requestAnimationFrame(balloonDraw);
  }

  function balloonPopEvent(X, Y) {
    let popEventCount = 0;
    function balloonPopDraw() {
      context.drawImage(balloonPop, X, Y, popWidth, popHeight);
      // context.drawImage(balloonPop,0,0,popWidth,popHeight)
      // context.drawImage(balloonPop,X,Y-speed,popWidth,popHeight)
      popEventCount++;

      if (popEventCount > 50) {
        popEventCount = 0;
        return;
      }
      requestAnimationFrame(balloonPopDraw);
    }
    balloonPopDraw();
  }

  canvas.onclick = function (e) {
    mousePosX = e.offsetX;
    mousePosY = e.offsetY;
    let clickedBallonIndex = 0;
    let currentX = 0;
    let currentY = 0;
    console.log("클릭됨");

    for (let i = 0; i < balloonAmount / 3; i++) {
      if (
        mousePosX > balloonPosXArr[i * 3 + 2] &&
        mousePosX < balloonPosXArr[i * 3 + 2] + balloonWidth &&
        mousePosY > balloonPosYArr[i * 3 + 2] - redSpeed &&
        mousePosY < balloonPosYArr[i * 3 + 2] - redSpeed + balloonHeight
      ) {
        console.log("빨강풍선 클릭됨");
        clickedBallonIndex = i * 3 + 2;
        //현재 풍선좌표 담아주고
        currentX = balloonPosXArr[clickedBallonIndex];
        currentY = balloonPosYArr[clickedBallonIndex] - redSpeed;
        // 클릭된 풍선 x좌표 -9999로 날리기
        balloonPosXArr[clickedBallonIndex] = -9999;
        // 점수추가
        balloonScore += 3;
        // 사라진위치에 터진이펙트
        balloonPopEvent(currentX, currentY);
      } else if (
        mousePosX > balloonPosXArr[i * 3 + 1] &&
        mousePosX < balloonPosXArr[i * 3 + 1] + balloonWidth &&
        mousePosY > balloonPosYArr[i * 3 + 1] - blueSpeed &&
        mousePosY < balloonPosYArr[i * 3 + 1] - blueSpeed + balloonHeight
      ) {
        console.log("파랑풍선 클릭됨");
        clickedBallonIndex = i * 3 + 1;
        currentX = balloonPosXArr[clickedBallonIndex];
        currentY = balloonPosYArr[clickedBallonIndex] - blueSpeed;
        balloonPosXArr[clickedBallonIndex] = -9999;
        balloonScore += 2;
        balloonPopEvent(currentX, currentY);
      } else if (
        mousePosX > balloonPosXArr[i * 3] &&
        mousePosX < balloonPosXArr[i * 3] + balloonWidth &&
        mousePosY > balloonPosYArr[i * 3] - greenSpeed &&
        mousePosY < balloonPosYArr[i * 3] - greenSpeed + balloonHeight
      ) {
        console.log("초록풍선 클릭됨");
        clickedBallonIndex = i * 3;
        currentX = balloonPosXArr[clickedBallonIndex];
        currentY = balloonPosYArr[clickedBallonIndex] - greenSpeed;
        balloonPosXArr[clickedBallonIndex] = -9999;
        balloonScore += 1;
        balloonPopEvent(currentX, currentY);
      } else {
        clickedBallonIndex = -1;
      }
    }
  };
  balloonStartBtn.onclick = function () {
    console.log("벌룬시작 클릭됨");
    canvas.style.display = "block";
    canvas.style.zIndex = "9999";
    canvas.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    balloonInit();
    redSpeed = 0;
    blueSpeed = 0;
    greenSpeed = 0;
    balloonScore = 0;
    balloonDraw();
  };
};
