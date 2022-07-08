//변수 설정
//게임 보드판 배열
let gamearray = [];
//바구니 배열
let bowlarray = [];
//위치 인덱스값
let index_crane = -1;

//게임스타트 구현

//게임시작시 메인보드 설정
let mainboard = document.querySelector(".mainboard");
let startbutton = document.querySelector(".startbutton");

//왼쪽 오른쪽 버튼 구현
let cranehand = document.querySelector(".cranehand");
let leftbutton = document.querySelector(".leftbutton");
let rightbutton = document.querySelector(".rightbutton");





startbutton.onclick = function(){
    mainboard.classList.add("active");

    //왼쪽, 오른쪽 버튼
    cranehand.style.left = "50px"; 
    cranehand.style.right = "50px";

    //왼쪽버튼
    leftbutton.onclick = function(){
    if(parseInt(cranehand.style.left)>=150){
        cranehand.style.left = parseInt(cranehand.style.left) - 50 + "px"; 
        index_crane -= 1;
        }
    }
    //오른쪽버튼
    rightbutton.onclick = function(){
    if(parseInt(cranehand.style.left)<=500){
        cranehand.style.left = parseInt(cranehand.style.left) + 50 + "px";  
        index_crane += 1; 
        }
    }

    //메인보드에 그림넣기
    if(mainboard.childElementCount == 0){
        

        //메인보드에 각 영역 추가
        for(let i =0; i<10;i++){
            //세로줄 10개 추가
            let columnbox = document.createElement("div");
            mainboard.appendChild(columnbox);
            columnbox.classList.add("column");
            //그안에 공간 10개씩 추가
            for(let k = 0; k<10; k++){
                let columninnerbox = document.createElement("div");
                columnbox.appendChild(columninnerbox);
                columninnerbox.classList.add("columnobject");
            }
        }
        
        //사진 랜덤으로 집어넣기
        let columnobject = document.querySelectorAll(".columnobject");

        for(let i =0; i<100;i++){
            //사진종류 5개 => 1~5 
            let ranNum = Math.floor(Math.random()*5+1);
            let ranImg = document.createElement("img");
            ranImg.src = `images/${ranNum}.png`;
            columnobject[i].appendChild(ranImg);
            //배열에 추가
            gamearray.push(ranNum)
        }
    }
    

    // //픽버튼 구현
    let pickbutton = document.querySelector(".pickbutton")
    let bowlcolumn = document.querySelector(".bowlcolumn")
    pickbutton.onclick = function(){
        let column = document.querySelectorAll(".column")
        let pickedElement = column[index_crane].lastChild;
        //cranehand 내리기
        cranehand.style.top = 525 - column[index_crane].childElementCount*50 + "px"
        //다시 올리기 + 인형도 올리기
        setTimeout(()=>{
            cranehand.style.top = "-20px";
            cranehand.appendChild(pickedElement)
            // pickedElement.classList.add("picked");
            // pickedElement.style.bottom = "-50px";
        },500)
        //바구니 위로 이동
        setTimeout(()=>{
            cranehand.style.left = "550px"
            pickedElement.style.left = 450 - index_crane*50 + "px";
        },1000)
        //바구니 위로 이동
        setTimeout(()=>{
            cranehand.style.left = "650px"
            cranehand.style.top = "-50px"
        },1500)

        //인형이 바구니로 떨어짐
        setTimeout(()=>{
            cranehand.style.top = 500 - bowlcolumn.childElementCount*50 + "px"
        },2000)
        //크레인 들기 + img 삽입
        setTimeout(()=>{
            cranehand.style.top = "-50px"
            bowlcolumn.appendChild(cranehand.lastChild);
            
            index_crane = -1;
        },2500)
        //같은개 2개면 제거 + 점수 오름
        setTimeout(()=>{
            let bowlcolumnobject = document.querySelectorAll(".bowlcolumn .columnobject");
            if(bowlcolumn.childElementCount>=2){
                if(bowlcolumnobject[bowlcolumn.childElementCount-1].lastChild.src == bowlcolumnobject[bowlcolumn.childElementCount-2].lastChild.src){
                    
                    bowlcolumn.removeChild(bowlcolumn.lastChild)
                    bowlcolumn.removeChild(bowlcolumn.lastChild)
                    let currentscore = document.querySelector(".currentscore");
                    currentscore.innerHTML = Number(currentscore.innerHTML) + 2;
                }
            }
        },2600)
        setTimeout(()=>{
            cranehand.style.left = "50px"
        },3000)
    }
}






//종료하기 버튼 구현
let retrybutton = document.querySelector(".retrybutton");

//크레인 먼저 돌아간후 메인보드 올라감
retrybutton.onclick = function(){
    let input = prompt("종료하시겠습니까? Y/N")
    let currentscore = document.querySelector(".currentscore");
    if (input == "Y"){
        if(mainboard.childElementCount==10){
            cranehand.style.left = "50px";
            setTimeout(()=>{mainboard.classList.remove("active")},1000);
            alert(`당신의 점수는 ${currentscore.innerHTML}점 입니다.`)
            for(let i =0; i<10;i++){
                //메인보드에 각 영역 삭제
                mainboard.removeChild(mainboard.lastChild);
                //바구니 각 영역 삭제
                let bowlcolumn = document.querySelector(".bowlcolumn")
                if(!bowlcolumn.childElementCount == 0){
                bowlcolumn.removeChild(bowlcolumn.lastChild)
                }
            }
        }
    }
}
