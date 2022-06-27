let wholeGameZoneul = document.querySelector(".wholeGameZoneul")
let adminModeAdd = document.querySelector(".adminModeAdd")
let AddHiddenPage = document.querySelector(".AddHiddenPage")
let AddPageAddButton = document.querySelector(".AddPageAddButton")
let AddPageCancelButton = document.querySelector(".AddPageCancelButton")
let AddPageGeturl = document.querySelector(".AddPageGeturl")
let AddPageGetname = document.querySelector(".AddPageGetname")
let AddPageGetcomment = document.querySelector(".AddPageGetcomment")
let AddPageGethastag = document.querySelector(".AddPageGethastag")
let AddPageGeturlInput = document.querySelector(".AddPageGeturlInput")
let AddPageGetnameInput = document.querySelector(".AddPageGetnameInput")
let AddPageGetcommentInput = document.querySelector(".AddPageGetcommentInput")
let AddPageGethastagInput = document.querySelector(".AddPageGethastagInput")

//게임종류 추가하는 모듈
let PushList = (
    function(){
        function PushList(url,name,comment,hashtag){
            this.url = url;
            this.name = name;
            this.comment = comment;
            this.hashtag = hashtag;
        }
        PushList.prototype.addgame = function(){
            let templist = document.createElement("li");
            let tempa = document.createElement("a");
            let tempimg = document.createElement("img");
            let ListGameZone = document.createElement("div");
            ListGameZone.classList.add("ListGameZone");
            let ListGameName = document.createElement("div");
            ListGameName.classList.add("ListGameName");
            let ListGameComment = document.createElement("div");
            ListGameComment.classList.add("ListGameComment");
            let ListGameHashTag = document.createElement("div");
            ListGameHashTag.classList.add("ListGameHashTag")
            wholeGameZoneul.appendChild(templist);
            templist.appendChild(tempa);
            templist.appendChild(ListGameZone);
            tempa.appendChild(tempimg); 
            ListGameZone.appendChild(ListGameName);
            ListGameZone.appendChild(ListGameComment);
            ListGameZone.appendChild(ListGameHashTag);
            ListGameName.innerHTML = this.name;
            ListGameComment.innerHTML = this.comment;
            ListGameHashTag.innerHTML = this.hashtag;
            tempimg.src = this.url;
        }
        return PushList
    }
)();

//게임종류 추가하기 창 데이터 초기화
function removeDatefromAddGame(){
    AddPageGeturlInput.value = "";
    AddPageGetnameInput.value = "";
    AddPageGetcommentInput.value = "";
    AddPageGethastagInput.value = "";
    AddHiddenPage.style.display = "none";
}

//게임종류 추가하기
adminModeAdd.onclick = function(e){
    AddHiddenPage.style.display = "block";
    AddPageAddButton.onclick = function(e){
        e.stopPropagation();
       new PushList(AddPageGeturlInput.value,AddPageGetnameInput.value,AddPageGetcommentInput.value,AddPageGethastagInput.value).addgame();
        removeDatefromAddGame();
    }
    AddPageCancelButton.onclick = function(e){
        e.stopPropagation();
        removeDatefromAddGame();
    }
}
