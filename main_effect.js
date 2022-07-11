//=============홈페이지 이펙트=====================================
//스크롤 리모컨 버튼
// window.onscroll = function () {
//   let main = document.querySelector(".main div:first-child");
//   if (main.getBoundingClientRect().top < 120) {
//     document.querySelector(".scrollContents").style.zIndex = "1";
//     scrollBtn.style.opacity = "1";
//     scrollBtn.style.top = "400px";
//     setTimeout(() => {
//       scrollBtn.style.top = "340px";
//     }, 500);
//   } else {
//     scrollBtn.style.opacity = "0";
//     document.querySelector(".scrollContents").style.zIndex = "-999";

//     scrollBtn.style.top = "300px";
//   }
// };

// scrollBtn.onclick = function (e) {
//   e.preventDefault(); //a태그가 비어있으면 새로고침되는거 방지
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

//왼쪽 메뉴바 저승으로
// //왼쪽 메뉴바 효과
// let leftMenuCount = document.querySelector('.leftMenu').childElementCount
// allLeftMenuDiv=document.querySelectorAll('.leftMenudiv')

// for (let i = 1; i<=leftMenuCount; i++){
//     document.querySelector(`.leftMenu li:nth-child(${i})`).onmouseenter = function(){
//         for(let i = 1; i<=leftMenuCount; i++){
//             if(allLeftMenuDiv[i-1].classList.contains('start')){
//                 allLeftMenuDiv[i-1].classList.remove('start')
//             }
//             if(allLeftMenuDiv[i-1].classList.contains('active')){
//                 allLeftMenuDiv[i-1].classList.remove('active')
//             }
//         }
//         allLeftMenuDiv[i-1].classList.add('start')
//         setTimeout(() => {
//             allLeftMenuDiv[i-1].classList.add('active')
//         }, 100);
//     }
// }

// document.querySelector(`.leftMenu`).onmouseleave = function(){
//     for(let i = 1; i<=leftMenuCount; i++){
//         if(allLeftMenuDiv[i-1].classList.contains('start')){
//             allLeftMenuDiv[i-1].classList.remove('start')
//         }
//         if(allLeftMenuDiv[i-1].classList.contains('active')){
//             allLeftMenuDiv[i-1].classList.remove('active')
//         }
//     }
// }
// //======================================================================

// //================메뉴창 이동=======================================

// MenuCommunity.onclick = function(){
//     location.replace("../subpage/subpage.html")
// }
// MenuHome.onclick = function(){
//     location.replace("../mainpage/mainpage.html")
// }
