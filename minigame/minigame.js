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
let wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li")
let modifyGameListbutton = document.querySelector(".modifyGameListbutton")
let modifyGameListWholePage = document.querySelector(".modifyGameListWholePage")
let numberOfModifyGameList = document.querySelector(".numberOfModifyGameList")
let modifyGameListurl = document.querySelector(".modifyGameListurl")
let modifyGameListComment = document.querySelector(".modifyGameListComment")
let modifyGameListName = document.querySelector(".modifyGameListName")
let modifyGameListHashTag = document.querySelector(".modifyGameListHashTag")
let modifyGameListButtonModify = document.querySelector(".modifyGameListButtonModify")
let modifyGameListButtonDelete = document.querySelector(".modifyGameListButtonDelete")
let modifyGameListButtonCancel = document.querySelector(".modifyGameListButtonCancel")
let ListGameName = document.querySelectorAll(".ListGameName")
let ListGameComment = document.querySelectorAll(".ListGameComment")
let ListGameHashTag = document.querySelectorAll(".ListGameHashTag")
let wholeGameZoneulimg = document.querySelectorAll(".wholeGameZoneul li img")
let HashTagForDevide = document.querySelectorAll(".HashTagForDevide")
let wholeGameNavSortFilter = document.querySelectorAll(".wholeGameNavSortFilter")
let wholeGameNavSort = document.querySelector(".wholeGameNavSort")

//리스트 관련 모듈
let AboutList = (
    function(){
        function AboutList(url,name,comment,hashtag){
            this.url = url;
            this.name = name;
            this.comment = comment;
            this.hashtag = hashtag;
        }
        AboutList.prototype.addgame = function(){
            let templist = document.createElement("li");
            templist.classList.add("#전체");
            let tempa = document.createElement("a");
            let tempimg = document.createElement("img");
            let tempGameZone = document.createElement("div");
            tempGameZone.classList.add("ListGameZone");
            let tempGameName = document.createElement("div");
            tempGameName.classList.add("ListGameName");
            let tempGameComment = document.createElement("div");
            tempGameComment.classList.add("ListGameComment");
            let tempGameHashTag = document.createElement("div");
            tempGameHashTag.classList.add("ListGameHashTag");
            let tempwholeGameZoneulShadow = document.createElement("div");
            tempwholeGameZoneulShadow.classList.add("wholeGameZoneulShadow");
            wholeGameZoneul.appendChild(templist);
            templist.appendChild(tempwholeGameZoneulShadow);
            templist.appendChild(tempa);
            templist.appendChild(tempGameZone);
            tempa.appendChild(tempimg); 
            tempGameZone.appendChild(tempGameName);
            tempGameZone.appendChild(tempGameComment);
            tempGameZone.appendChild(tempGameHashTag);
            tempGameName.innerHTML = this.name;
            tempGameComment.innerHTML = this.comment;
            tempimg.src = this.url;
            //해쉬태그 추가
            for(let i = 0; i<HashTagForDevide.length; i++){
                if(HashTagForDevide[i].checked){
                    tempGameHashTag.innerHTML += `${HashTagForDevide[i].value} `;
                    templist.classList.add(HashTagForDevide[i].value);
                }
            }
            wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li");
        }
        AboutList.prototype.modifygamelist = function(){
            let slideIndex = numberOfModifyGameList.value -1;
            wholeGameZoneulimg[slideIndex].src = modifyGameListurl.value;
            ListGameName[slideIndex].innerHTML = modifyGameListName.value;
            ListGameComment[slideIndex].innerHTML = modifyGameListComment.value;
            ListGameHashTag[slideIndex].innerHTML = modifyGameListHashTag.value;
            ListGameName = document.querySelectorAll(".ListGameName")
            ListGameComment = document.querySelectorAll(".ListGameComment")
            ListGameHashTag = document.querySelectorAll(".ListGameHashTag")
            wholeGameZoneulimg = document.querySelectorAll(".wholeGameZoneul li img")
        }
        AboutList.prototype.deletegamelist = function(){
            let slideIndex = numberOfModifyGameList.value -1;
            wholeGameZoneul.removeChild(wholeGameZoneullist[slideIndex]);
            wholeGameZoneullist = document.querySelectorAll(".wholeGameZoneul li");
        }
        return AboutList
    }
)();

//게임종류 추가 창 데이터 초기화
function removeDatefromAddGame(){
    AddPageGeturlInput.value = "";
    AddPageGetnameInput.value = "";
    AddPageGetcommentInput.value = "";
    AddPageGethastagInput.value = "";
    AddHiddenPage.style.display = "none";
    for(let i = 0; i<HashTagForDevide.length; i++){
        HashTagForDevide[i].checked = false;
    }

}

//게임종류 수정 창 데이터 초기화
function removeDatefromModifyGame(){
    numberOfModifyGameList.value = "";
    modifyGameListurl.value = "";
    modifyGameListName.value = "";
    modifyGameListComment.value = "";
    modifyGameListHashTag.value = "";
    modifyGameListWholePage.style.display = "none";
}

//게임종류 추가하기
adminModeAdd.onclick = function(e){
    AddHiddenPage.style.display = "block";
    if(modifyGameListWholePage.style.display == "block"){
        modifyGameListWholePage.style.display = "none";
    }
    AddPageAddButton.onclick = function(e){
        e.stopPropagation();
       new AboutList(AddPageGeturlInput.value,AddPageGetnameInput.value,AddPageGetcommentInput.value,AddPageGethastagInput.value).addgame();
        removeDatefromAddGame();
    }
    AddPageCancelButton.onclick = function(e){
        e.stopPropagation();
        removeDatefromAddGame();
    }
}

//게임 리스트 수정하기
modifyGameListbutton.onclick = function(){
    modifyGameListWholePage.style.display = "block";
    if(AddHiddenPage.style.display == "block"){
        AddHiddenPage.style.display = "none"
    }
    modifyGameListButtonModify.onclick = function(e){
        e.stopPropagation();
        new AboutList().modifygamelist();
        removeDatefromModifyGame();
    }
    modifyGameListButtonDelete.onclick = function(e){
        e.stopPropagation();
        new AboutList().deletegamelist();
        removeDatefromModifyGame();
    }
    modifyGameListButtonCancel.onclick = function(e){
        e.stopPropagation();
        removeDatefromModifyGame();
    }
}

//메뉴 필터링
function menufilteringFun(){
    for(let i = 0;i<wholeGameNavSortFilter.length;i++){
        wholeGameNavSortFilter[i].onclick = function(){
            if(!wholeGameNavSortFilter[i].classList.contains('filterSelected')){
                for(let j = 0 ; j<wholeGameNavSortFilter.length;j++){
                    //모든 클래스 제거
                    wholeGameNavSortFilter[j].classList.remove("filterSelected")
                }
                wholeGameNavSortFilter[i].classList.add("filterSelected")
            }
            else{
                wholeGameNavSortFilter[i].classList.remove("filterSelected")
                //전체보여주기
                for(let h = 0; h<wholeGameNavSortFilter.length;h++){
                    wholeGameZoneullist[h].style.display = "block"
                }
            }
            for(let k = 0; k<wholeGameZoneullist.length; k++){
                wholeGameZoneullist[k].style.display = "none"
                if(wholeGameZoneullist[k].classList.contains(wholeGameNavSortFilter[i].innerText)){
                    wholeGameZoneullist[k].style.display = "block"
                }
            }
        }
    }
}
menufilteringFun();

//게임 검색기능
let searchText = document.querySelector('.searchText');
let searchImg = document.querySelector('.searchImg');
let gameSearchFun = function(){
    searchImg.onclick = function(){
        let searchSomething = searchText.value;
        let searchSomethingreg = new RegExp(searchSomething,'igm');
        for(let i = 0; i<wholeGameZoneullist.length; i++){
            let tosearch = wholeGameZoneullist[i].querySelector('.ListGameName').innerHTML;
            wholeGameZoneullist[i].style.display = "none"
            if(tosearch.match(searchSomethingreg)){
                wholeGameZoneullist[i].style.display = "block"
            }
        }
        searchText.value = ""
    }
    searchText.onkeydown = function(e){
        if(e.keyCode == 13){
        let searchSomething = searchText.value;
        let searchSomethingreg = new RegExp(searchSomething,'igm');
        for(let i = 0; i<wholeGameZoneullist.length; i++){
            let tosearch = wholeGameZoneullist[i].querySelector('.ListGameName').innerHTML;
            wholeGameZoneullist[i].style.display = "none"
            if(tosearch.match(searchSomethingreg)){
                wholeGameZoneullist[i].style.display = "block"
            }
        }
        searchText.value = ""
        }
    }
}
gameSearchFun();

//게임나타나는버튼


