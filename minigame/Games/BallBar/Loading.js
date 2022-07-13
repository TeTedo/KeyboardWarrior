const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

function radian(angle) {
  return (angle * Math.PI) / 180;
}

let count1 = 0;
let count2;
let count3;

function Loading() {
  context.font = "50px Noto Sans KR";
  if (count1 % 100 < 25) {
    context.clearRect(0, 0, canvas.width, canvas.clientHeight);
    context.fillText("로", 300, 300);
  }
  if (count1 % 100 >= 25 && count1 % 100 < 50) {
    context.clearRect(0, 0, canvas.width, canvas.clientHeight);
    context.fillText("로딩", 300, 300);
  }
  if (count1 % 100 >= 50 && count1 % 100 < 75) {
    context.clearRect(0, 0, canvas.width, canvas.clientHeight);
    context.fillText("로딩중", 300, 300);
  }
  if (count1 % 100 >= 75 && count1 % 100 < 100) {
    context.clearRect(0, 0, canvas.width, canvas.clientHeight);
    context.fillText("로딩중....", 300, 300);
  }
  count1++;
  console.log(count1 % 100);
  requestAnimationFrame(Loading);
}
Loading();
