window.onload = () => {
    const idTest = new RegExp(/[^a-z0-9]/g);
    const passwordTest = new RegExp(
        /(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]/
    );
    const nameTest = new RegExp(/[^가-힣]/g);
    const nickNameTest = new RegExp(/[^가-힣a-z0-9]/g);
    const numTest = new RegExp(/[^0-9]/g);
    const emailTest = new RegExp(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );

    const mobile = document.querySelector(".mobile");
    let id;
    let password;
    let passwordRe;
    let name;
    let nickName;
    let mobileNumber;
    let email;
    let isIdConfirmed;
    let isPwConfirmed;
    let isPwReConfirmed;
    let isNameConfirmed;
    let isNickNameConfirmed;
    let isMiddleNumConfirmed;
    let isLastNumConfirmed;
    let isEmailConfiremd;

    function checkId() {
        console.log(userIds);
        id = inputId.value;
        isIdConfirmed = false;
        if (id.length == 0) {
            idWarn.innerHTML = "아이디를 입력하세요.";
        } else {
            idWarn.innerHTML = "";
            if (idTest.test(id)) {
                idWarn.innerHTML = "영소문자 혹은 숫자만 쓰세요.";
            } else {
                if (id.length < 4 || id.length > 16) {
                    idWarn.innerHTML = "4~16자로 쓰세요.";
                } else {
                    idWarn.innerHTML = `${id}는 사용 가능한 아이디입니다.`;
                    isIdConfirmed = !isIdConfirmed;
                    return id;
                }
            }
        }
    }
    function checkPw() {
        password = inputPassword.value;
        isPwConfirmed = false;
        if (password.length == 0) {
            passwordWarn.innerHTML = "입력하세요.";
        } else {
            if (passwordTest.test(password)) {
                if (password.length < 8 || password.length > 16) {
                    passwordWarn.innerHTML = "Password를 8~16자 사이로 쓰세요.";
                } else {
                    passwordWarn.innerHTML = ``;
                    isPwConfirmed = !isPwConfirmed;
                }
            } else {
                passwordWarn.innerHTML = "Password형식이 틀렸습니다.";
            }
        }
    }
    function checkPwRe() {
        passwordRe = inputPasswordRe.value;
        isPwReConfirmed = false;
        if (passwordRe.length == 0) {
            passwordConfirmWarn.innerHTML = "입력하세요.";
        } else {
            if (!(password == passwordRe)) {
                passwordConfirmWarn.innerHTML = "비밀번호랑 같게 쓰세요.";
            } else {
                passwordConfirmWarn.innerHTML = "";
                isPwReConfirmed = !isPwReConfirmed;
            }
        }
    }
    function checkName() {
        name = inputName.value;
        isNameConfirmed = false;
        if (name.length == 0) {
            nameWarn.innerHTML = "입력해주세요.";
        } else {
            if (nameTest.test(name)) {
                nameWarn.innerHTML = "한글 글자만 넣어주세요.";
            } else {
                nameWarn.innerHTML = "";
                isNameConfirmed = !isNameConfirmed;
            }
        }
    }
    function checkNickName() {
        nickName = inputNickName.value;
        isNickNameConfirmed = false;
        if (nickName.length == 0) {
            nickNameWarn.innerHTML = "입력해주세요.";
        } else {
            if (nickNameTest.test(nickName)) {
                nickNameWarn.innerHTML = "한글, 영문자, 숫자만 사용해주세요.";
            } else {
                nickNameWarn.innerHTML = `${nickName}는 사용가능한 닉네임 입니다.`;
                isNickNameConfirmed = !isNickNameConfirmed;
            }
        }
    }
    function checkMobileNum() {
        firstNum = inputNum1.value;
        middleNum = inputNum2.value;
        lastNum = inputNum3.value;
        isMiddleNumConfirmed = false;
        isLastNumConfirmed = false;
        mobileNumber = firstNum + middleNum + lastNum;
        if (middleNum.length == 0 || lastNum.length == 0) {
            mobileWarn.innerHTML = "빠짐없이 입력해주세요.";
        } else {
            mobileWarn.innerHTML = "";
            if (numTest.test(middleNum) || numTest.test(lastNum)) {
                mobileWarn.innerHTML = "숫자만 입력하세요.";
            } else {
                if (middleNum.length < 3 || middleNum.length > 4) {
                    mobileWarn.innerHTML += " 2번째칸 3~4자리로 입력하세요.";
                } else {
                    isMiddleNumConfirmed = !isMiddleNumConfirmed;
                }
                if (!(lastNum.length == 4)) {
                    mobileWarn.innerHTML += " 3번째칸 4자리로 입력하세요.";
                } else {
                    isLastNumConfirmed = !isLastNumConfirmed;
                }
            }
        }
    }
    function checkEmail() {
        email = inputEmail.value;
        isEmailConfiremd = false;
        if (email.length == 0) {
            emailWarn.innerHTML = "입력해주세요.";
        } else {
            emailTest.innerHTML = "";
            if (emailTest.test(email)) {
                emailWarn.innerHTML = `${email}는 사용가능한 이메일 입니다.`;
                isEmailConfiremd = !isEmailConfiremd;
                return email;
            } else {
                emailWarn.innerHTML = "이메일 형식이 틀렸습니다.";
            }
        }
    }
    inputId.onkeyup = () => checkId();
    inputPassword.onkeyup = () => checkPw();
    inputPasswordRe.onkeyup = () => checkPwRe();
    inputName.onkeyup = () => checkName();
    inputNickName.onkeyup = () => checkNickName();
    mobile.onkeyup = () => checkMobileNum();
    inputEmail.onkeyup = () => checkEmail();
    finishBtn.onclick = function () {
        //이용약관
        if (checkBox1.checked) {
            checkBox1Warn.innerHTML = "";
        } else {
            checkBox1Warn.innerHTML = "박스를 체크해주세요.";
        }
        if (checkBox2.checked) {
            checkBox2Warn.innerHTML = "";
        } else {
            checkBox2Warn.innerHTML = "박스를 체크해주세요.";
        }
        checkId();
        checkPw();
        checkPwRe();
        checkName();
        checkNickName();
        checkMobileNum();
        checkEmail();

        //회원가입 성공
        // if (
        //     isIdConfirmed &&
        //     isPwConfirmed &&
        //     isPwReConfirmed &&
        //     isNameConfirmed &&
        //     isNickNameConfirmed &&
        //     isMiddleNumConfirmed &&
        //     isLastNumConfirmed &&
        //     isEmailConfiremd &&
        //     checkBox1.checked &&
        //     checkBox2.checked
        // ) {
        if (true) {
            alert("키보드워리어 회원이되신걸 환영합니다");
            $.ajax({
                url: "/join",
                type: "post",
                data: {
                    user_id: id,
                    user_pw: password,
                    name,
                    nick_name: nickName,
                    mobile_number: mobileNumber,
                    email,
                },
            });
            // location.replace("/login");
        }
    };

    cancleBtn.onclick = function () {
        location.replace("/login");
    };
};
