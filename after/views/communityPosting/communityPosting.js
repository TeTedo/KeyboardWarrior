//readURL function
function readURL(input, index, callback) {
    if (input.files[0]) {
        // 파일 읽고 미리보기 띄우기 위함
        const reader = new FileReader();

        //파일 읽기 성공했을때마다 실행
        reader.onload = function (e) {
            //큰 화면에 이미지 띄우기
            document.querySelector("#posting_left > img").src = e.target.result;

            const imgTag = document.querySelectorAll(
                "#posting_right_imagePreview > div > img"
            );
            imgTag[index].style.display = "block";
            imgTag[index].src = e.target.result;
            callback();
        };

        // file 읽어오기
        reader.readAsDataURL(input.files[0]);
    } else {
        document.querySelector("#posting_left > img").src = "";
    }
}

function clickPreImg() {
    const imgPreview = document.querySelectorAll(
        "#posting_right_imagePreview > div > img"
    );

    imgPreview.forEach(el => {
        el.onclick = function () {
            // el.src는 (data:*/*;base64, base64로 인코딩된 코드) 형식으로 되있다.
            document.querySelector("#posting_left > img").src = el.src;
        };
    });
}

//함수 실행 부분
document.querySelectorAll("input[type=file]").forEach((el, index) => {
    el.onchange = function () {
        document.querySelectorAll("#posting_right_imagePreview span")[
            index
        ].style.display = "block";
        // label display none
        document.querySelectorAll(".fa-image")[index].style.display = "none";
        // 파일 미리보기
        readURL(this, index, clickPreImg);
    };
});

//이미지 삭제 버튼
document
    .querySelectorAll("#posting_right_imagePreview span")
    .forEach((el, index) => {
        el.onclick = function () {
            const targetTag = document.querySelectorAll(
                "#posting_right_imagePreview img"
            )[index];
            // 왼쪽화면과 삭제하려는 사진이 같으면 왼쪽화면 비우기
            if (
                document.querySelector("#posting_left > img").src ==
                targetTag.src
            ) {
                document.querySelector("#posting_left > img").src = "";
            }
            // 미리보기 지우기
            targetTag.src = "";
            targetTag.style.display = "none";
            // 이미지 올리는 버튼 다시 띄우기
            document.querySelectorAll(".fa-image")[index].style.display =
                "block";
            // input files value 비워주기
            document.querySelectorAll("input[type=file]")[index].value = "";
            // x버튼 삭제
            document.querySelectorAll("#posting_right_imagePreview span")[
                index
            ].style.display = "none";
        };
    });

// 사이드바 접기
const closeSideBar = document.querySelector(".fa-arrow-left-long");
const openSideBar = document.querySelector(".fa-arrow-right-long");
const sideBar = document.querySelector("#sideBar");
closeSideBar.onclick = function () {
    sideBar.style.transform = "translate(-450px)";
    openSideBar.style.display = "block";
};
openSideBar.onclick = function () {
    sideBar.style.transform = "translate(0)";
};
