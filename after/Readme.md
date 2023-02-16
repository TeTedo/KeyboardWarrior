# <a href="http://localhost:3000/"><div align=center>**Keyboard Warrior**</div></a>

## <span color=blue>게이머들을 위한 SNS!</span>

<br/>

### **기간** : 2022.08.22~2022.09.08

<br/>

> #### 1주차 : 아이디어 기획, DB관계 정리, 폴더 정리

> #### 2주차 : 메인 기능 추가(회원가입, 로그인,프로필 수정, 글쓰기, 수정, 삭제, 팔로우)

> #### 3주차 : 사이드바 기능 추가(알림, 채팅), 프로필 페이지 추가

<br/>

### **팀원**

박태석(TeTedO)[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTeTedo&count_bg=%230D00FF&title_bg=%23000000&icon=darkreader.svg&icon_color=%23FF0000&title=hits&edge_flat=false)](https://github.com/TeTedo) <a href="https://diary-blockchain.tistory.com/"><img src="https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=tistory&logoColor=white"></a>

노민섭(ssups)[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fssups&count_bg=%23D0D147&title_bg=%23BA0AEF&icon=jenkins.svg&icon_color=%23EFE8F1&title=hits&edge_flat=false)](https://github.com/ssups) <a href="https://www.notion.so/4d9fc56c7e704b0f8b901a05ff39b3d5?v=0332be377cf34412bed06c1b4acfc6cb"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a>

<br/>

## 목차

- ### [**목적**](#목적-1)
  - #### [기존 커뮤니티와 차별점](#기존-커뮤니티와-차별점-1)
- ### [**사용한 기술**](#사용한-기술-1)
- ### [**주요 기능**](#주요-기능-1)
  - #### [회원가입](#회원가입-1)
  - #### [로그인](#로그인-1)
  - #### [프로필 수정](#프로필-수정-1)
  - #### [글작성](#글작성-1)
  - #### [수정 및 삭제](#수정-및-삭제-1)
  - #### [좋아요](#좋아요-1)
  - #### [댓글](#댓글-1)
  - #### [팔로우](#팔로우-1)
  - #### [채팅](#채팅-1)
  - #### [알람](#알람-1)
- ### [**상세 설명**](#상세-설명-1)
  - #### [DB구조](#DB구조-1)
  - #### [PPT](#PPT-1)

---

# 목적

기존 대표적인 게이머들을 위한 커뮤니티로는 인벤, 국민트리 등이 있다.<br/>
들어가보면 모두 게시판 형식으로 되어있었고 작성자들을 보니 일반 유저들이 글을 올리기 보다 글을 올리는 유저만 올리는 것을 확인할수 있었다.
<br/>
이를 보고 단방향 소통이 아닌 SNS처럼 가볍게 양방향 소통이 이루어지면 좋을것이라고 생각했다.
<br/>
그래서 우리팀은 게이머의 입장에서 일상도 공유하고 같은 게임을 하는 사람들끼리 정보도 공유하는 SNS플랫폼을 만들기로 했다.
<br/>

### 기존 커뮤니티와 차별점

- 게임 중심이 아닌 일상 SNS 중심
- 게임별 커뮤니티와 일상 커뮤니티 구별
- 유저들끼리 채팅기능, 팔로우 기능

<br/>

## 사용한 기술

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/font awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=black"> <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=black"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=black"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> <a href="https://www.notion.so/Keyboard-Warrior-888a144aa79f437e8f726910c42617a8"><img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"></a> <a href="https://github.com/TeTedo/KeyboardWarrior"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"></a>

## 주요 기능

1. ### **회원가입**

![회원입](https://user-images.githubusercontent.com/107897812/194187494-b1158660-9165-4867-8e93-3389aecbf6a4.png)

회원가입시 받는 정보 : 아이디, 비밀번호, 이름, 닉네임, 전화번호, 이메일, 개인정보약관 동의

**받는 정보에 대한 정규 표현식**

```JS
const idTest = new RegExp(/[^a-z0-9]/);
const passwordTest = new RegExp(
  /(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]/
);
const nameTest = new RegExp(/[^가-힣]/);
const nickNameTest = new RegExp(/[^가-힣a-z0-9]/);
const numTest = new RegExp(/[^0-9]/);
const emailTest = new RegExp(
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
);
```

추가로 아이디와 닉네임은 중복이 되면 안되므로 입력할때마다 기존 DB와 비교한다.
<img src="https://user-images.githubusercontent.com/107897812/194188518-4b207be1-43f2-4445-a48a-19234618000a.png" width=400 height=200>

회원가입시 기본 프로필 이미지 7가지 중 랜덤으로 1개를 제공한다.
![image](https://user-images.githubusercontent.com/107897812/194188876-92c02d04-6caf-4f45-8ec5-ed5b7955bc91.png)

2. ### **로그인**

**Access Token & Refresh Token**<br/>
로그인 하면 권한을 부여하기 위해 토큰 부여 - express 쿠키에 저장

**Access Token** : 10분마다 만료 <br/>

```JS
const access_token = jwt.sign(
   {
     alg: "HS256",
     typ: "JWT",
     userId: data.user_id,
   },
   process.env.ACCSESS_TOKEN,
   {
     expiresIn: "10m",
   }
 );
```

**Refresh Token** : 1시간마다 만료

```JS
const refresh_token = jwt.sign(
   {
     alg: "HS256",
     typ: "JWT",
     userId: data.user_id,
   },
   process.env.REFRESH_TOKEN,
   {
     expiresIn: "1h",
   }
);
```

Access 토큰만 만료되었을 경우 Refresh Token이 존재한다면 Access Token을 다시 만들어 준다.<br/><br/>

**로그인 미들웨어 함수**

```js
const loginStatus = (req, res, next) => {
  const { access_token, refresh_token } = req.session;

  jwt.verify(access_token, process.env.ACCSESS_TOKEN, (err, acc_decoded) => {
    // access_token expired
    if (err) {
      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN,
        (error, ref_decoded) => {
          if (error) {
            // 로그인 만료
            next();
          } else {
            // accesstoken 다시 만들기
            const accessToken = jwt.sign(
              {
                alg: ref_decoded.alg,
                typ: ref_decoded.typ,
                userId: ref_decoded.userId,
              },
              process.env.ACCSESS_TOKEN,
              {
                expiresIn: "10m",
              }
            );
            req.session.access_token = accessToken;
            console.log("토큰 교체 완료");
            next();
          }
        }
      );
    } else {
      console.log("정상 로그인");
      next();
    }
  });
};
```

3. ### **프로필 수정**

![profile](https://user-images.githubusercontent.com/107897812/194441576-1b4b50cd-f479-47bb-a674-fad2c27d5ebe.png)
로그인 후 왼쪽 사이드바 톱니바퀴 모양을 클릭하면 프로필 수정 페이지에 들어갈수 있다.<br/><br/>

![middleware](https://user-images.githubusercontent.com/107897812/194441736-5f2fccc2-1cf7-4898-abf3-dd6618440736.png)
들어가기전 비밀번호 확인<br/><br/>
![modify](https://user-images.githubusercontent.com/107897812/194441737-702489f4-5f9e-467f-a66a-8f6e0df51cb4.png)
아이디와 닉네임을 제외한 것들을 수정할 수 있다.<br/> 회원가입 할때와 똑같이 중복검사, 정규표현식 검사를 실시한다.<br/><br/>

4. ### **글작성**

![post](https://user-images.githubusercontent.com/107897812/194442408-4649f295-dd04-48dc-a06e-500c72e7e91b.png)
왼쪽 사이드바에 글쓰기 버튼 클릭으로 글쓰기 페이지 접근<br/><br/>
![post](https://user-images.githubusercontent.com/107897812/194443090-eaaf0e9a-3b9f-4159-b33e-b2b370aac149.png)
화면 중단 쯤에 있는 사진 모양을 클릭하면 이미지를 올릴수 있다. 이미지를 올리면 왼쪽에 미리보기가 뜬다.<br/>
중단에 있는 이미지 미리보기 창 오른쪽 X버튼을 누르면 올린 이미지를 취소할 수 있다.<br/><br/>
![commu post](https://user-images.githubusercontent.com/107897812/194443465-308d9249-c7b6-4b43-90d1-198bff87263f.png)
상단 네비게이션 바에 있는 COMMUNITY로 들어가서 글을 쓰면 해쉬태그를 추가하는 칸이 있다.<br/><br/>
![post](https://user-images.githubusercontent.com/107897812/194444770-0a03b304-56b8-4764-bded-c655b2f748a2.png)
메인 페이지에 글이 추가된 모습<br/><br/>
![post](https://user-images.githubusercontent.com/107897812/194444977-e2b244e0-0a06-489f-951e-8ba60ad7d71e.png)
글을 클릭하면 글로 이동<br/><br/>

5. ### **수정 및 삭제**

자기가 쓴 글에만 수정하기 버튼이 활성화 된다.
![modify](https://user-images.githubusercontent.com/107897812/194445223-60c12568-1b24-4b11-ac26-133f26c18111.png)
해당 페이지에서 삭제, 수정 가능

6. ### **좋아요**

좋아요를 누르지 않은 게시물은 검으색 하트로 보이고
![like detail](https://user-images.githubusercontent.com/107898015/217189411-6042af32-7c2b-494f-9821-45bf3d8b840c.png)
검은색 하트를 누르면 빨간색으로 바뀌면서 좋아요 갯수가 올라간다
![like](https://user-images.githubusercontent.com/107898015/217189037-69809f0a-7e8c-4fc3-b927-4676957251ea.png)
이는 게시글 상세페이지에도 적용된다.
![like detail](https://user-images.githubusercontent.com/107898015/217189201-a09c5777-0742-4561-a51d-6d06c6f8b23e.png)

7. ### **댓글**

   글 상세페이지에서 댓글을 작성할수 있다. <br>
   본인이 작성한 댓글은 휴지통 아이콘을 클릭하여 삭제할수 있다.
   <img width="1512" alt="image" src="https://user-images.githubusercontent.com/107898015/218322432-204a8baa-98c8-47b2-88a4-862f17ed7a0a.png">

8. ### **팔로우**

   사람모양의 팔로잉 아이콘을 누르면 상대팡의 팔로워, 나의 팔로잉 숫자가 1 늘어남과 함께 팔로잉 아이콘 모양이 변경된다.<br>
   ![image](https://user-images.githubusercontent.com/107898015/218349103-59f05b55-c459-42a7-9778-c1cf180f78f1.png)
   ![image](https://user-images.githubusercontent.com/107898015/218349226-399de153-9ab0-4170-b2bc-138bbcef6061.png)
   이미 팔로잉 하고있는 대상의 게시글에 활성화된 언팔로잉 버튼을 누르면 팔로잉 숫자가 다시 내려가면서 언팔로우 된다.

9. ### **검색**

   커뮤니티 게시판에서는 글 검색기능이 있다.<br>
   검색창에서 직접 키워드를 검색하게 되면,<br>
   해당 키워드를 해시태그 혹은 게시글 내용에 포함하고 있는 글만 검색된다.<br>
   <img width="1506" alt="image" src="https://user-images.githubusercontent.com/107898015/218347279-f7433cb9-ca68-4f9f-b75b-577c1ade42e4.png">
   또한 원하는 해시태그를 클릭하게 되면 해당 해시태그가 달린 글들만 따로 분류된다.
   <img width="1511" alt="image" src="https://user-images.githubusercontent.com/107898015/218347372-853385a0-7955-4e7a-b1f9-cc968ac39fcc.png">

10. ### **스크롤**
    일정갯수 이상의 게시글 및 게시판들의 페이지네이셔닝은 스크롤을 통해서 가능하도록 하였다.<br>
    가로스크롤이 힘든 유저의 환경을 고려하여, 상하 스크롤이 가로스크롤로 인식 되도록 하는 코드를 구현하였다.
    ![image](https://user-images.githubusercontent.com/107898015/218350437-c8edbbe6-c99e-4f6d-a1b5-e6ca311248ca.png)

```js
let move = 0;
let isOnScroll = true;

contentsWrap.onwheel = (e) => slide(e);

function slide(e) {
  offAnimation();
  contentsWrap.onwheel = null;
  const maxScroll = mainContentWrap.offsetWidth - mainContent.offsetWidth + 2;
  if (isOnScroll) {
    isOnScroll = false;
    setTimeout(() => {
      isOnScroll = true;
      contentsWrap.onwheel = (e) => slide(e);
    }, 500);
    move += e.wheelDelta < 0 ? 485 : -485;
    move = move < 0 ? maxScroll : move;
    move = move > maxScroll ? 0 : move;
    mainContent.scrollTo({ left: move, behavior: "smooth" });
  } else if (!isOnScroll) {
    return;
  }
}
```

11. ### **채팅**

<img width="300" alt="image" src="https://user-images.githubusercontent.com/107897812/219322428-d2516ff6-e2a0-4a0c-81f1-e64cffc58bae.png">
<img width="300" alt="image" src="https://user-images.githubusercontent.com/107897812/219322406-d39a564d-ed9a-4608-85c7-133dc1ee8d7b.png">

socket을 이용한 실시간 채팅 구현

12. ### **알람**

<img width="300" alt="image" src="https://user-images.githubusercontent.com/107897812/219322799-e499d6d2-9ca3-472f-8378-99ef6d90556a.png">

팔로우, 좋아요, 댓글 알림기능

보지 않았던 알림 갯수만큼 숫자 표시

해당 알람 클릭시 팔로우-> 해당유저 프로필페이지 이동, 좋아요,댓글 -> 해당 게시글로 이동

## **상세 설명**

1. ### **DB구조**

![image](https://user-images.githubusercontent.com/107897812/219322026-7cd95be5-0532-48a4-8fbf-9473d3bc39a9.png)

2. ### **PPT**
   [발표PPT](https://github.com/TeTedo/KeyboardWarrior-ejs-SNS/files/10754170/ppt.pptx)
