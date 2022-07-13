let Wrap = document.querySelector('.Wrap');
let forSort = document.querySelectorAll('.forSort');
let likeCount = document.querySelectorAll('.likeCount');

let forSortArray = [];

for(let i = 0 ; i<forSort.length; i++){
    let likeValue = likeCount[i].innerText;
    forSortArray.push([likeValue, forSort[i]])
}
forSortArray.sort((a,b)=>a[0]-b[0])
for(let i = 0 ; i<forSortArray.length; i++){
Wrap.appendChild(forSortArray[i][1]);
}
console.log(forSortArray)
