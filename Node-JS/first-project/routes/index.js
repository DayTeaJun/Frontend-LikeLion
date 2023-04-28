var express = require('express');
var router = express.Router();

// 해당 내용은 postman을 이용하여 테스트하였음

/* GET home page. */
// router.post('/main', (req, res) => {
// 앞에 http메서드인 post, get, delete, put 등등으로 서버주소(url) 뒤에 '/main'로 접근하고 요청에 대한 응답을 받고싶을 때 req, 응답을 하고싶을 때 res
// res.json({
//   message: "success!!",
// });

// const data = req.body.data; // data안에 body안에 데이터의 요청을 초기화
// res.send('문자열이 응답됩니다.') // res.send는 문자열이 응답할 수 있을 때 사용

// res.json은 json 형태 객체가 응답함
// res.json({
//   message: 'json 응답',
// })

// res.render는 views 폴더에 있는 템플릿 파일(error.ejs, index.ejs)인 사용자가 볼수있는 뷰파일들을 랜더링해줌
// res.render("index"); // 확장자는 안적어도 됨
// render는 html 코드를 브라우저에게 보여주는 방식

// HTTP 메서드 : 서버에 요청을 보내는 방법
// 나중에 DB 쓸때 CRUD 개념에 대한 것을 메소드로 구분짓기 위함
// GET : 요청 받은 정보를 검색(READ)하여 응답
// POST : 요청된 자원을 생성(CREATE)
// PUT : 요청된 자원을 수정(UPDATE)
// DELETE : 요청된 자원을 삭제(DELETE)
// });

// post 메소드는 데이터베이스의 데이터를 넣을 때 사용하는데, 현재는 외부데이터를 사용할 수 있는 환경이 아니기 때문에 아래 변수에 빈배열에 데이터를 넣고 추가하고 수정하고 삭제하는 것을 해보도록 함.
/*

아래 내용은 HTTP 메서드 활용 코드들이다.

let arr = [];


// GET method 클라이언트로부터 요청이 들어왔을 때
// req는 클라이언트에서 요청받는 데이터를 받을 수 있게 되고
// res를 서버에서 클라이언트로 응답을 보낼 수 있게함 
router.get('/read', (req, res) => {
  // 정상적으로 응답을 할 것이라고 명시(200) 그리고 json으로 해당 응답을 보냄
  res.status(200).json({
    message: "read success",
    result: arr,
  });
  // 위 코드를 정리하면 get메서드로 /read 라우터로 요청이 들어 왔을 때 200번 status코드로 메시지 read success인 응답을 보낼 수 있게 됨.
})

// POST method DB에 data를 넣을 때 많이 사용함
router.post('/create', (req, res) => {
  // 데이터를 받아야함
  // req.body에 요청해서 무슨 데이터를 받아오는지 확인
  // console.log(req.body)

  // data에 req.body.data 값을 받아옴
  // const data = req.body.data;
  // 위코드의 상수명 data와 받아오는 값 data의 이름이 같다.
  // 그래서 비구조화 할당이 가능함. 아래처럼 만듦
  // 정리하면 const data = req.body.data랑 같음
  // 그래서 클라이언트한테 프로퍼티를 받아오면 그 안의 값을 가져옴
  const { data } = req.body;
  // 클라이언트의 req.body 객체는 post나 put과 같은 HTTP 요청에서 클라이언트가 전송한 데이터를 담고 있는 객체.

  // chatgpt 비구조화 할당 설명
  // 클라이언트에서 { name: "John", age: 30 }과 같은 데이터를 전송했다면, const { name, age } = req.body;와 같이 사용할 수 있습니다. 이렇게 하면 name 변수에는 "John"이, age 변수에는 30이 할당됩니다.

  // 위에 선언한 빈배열안에 데이터를 추가
  arr.push(data);
  res.status(200).json({
    massage: "create success",
    result: arr,
  })
})

// PUT methood를 통해 해당 데이터를 수정해봄
// update할려면 위에서 받은 배열의 몇번째를 수정하고 싶은지 명시
// update를 하고싶은데 2번째 데이터를 부르고 싶다
// update/2 이렇게하면 서버가 배열안의 2번째인 데이터를 확인함. 그리고 변경하게 할 수 있음.
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id); // 내가 몇번째의 데이터를 업데이트 할지 명시함.
  const { data } = req.body; // 업데이트할 데이터도 넘겨줘야함
  arr[id] = data; // 배열의 id번째를 받아온 data로 업데이트
  res.status(200).json({
    message: "update success",
    result: arr,
  })
})

// DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params; // id는 req.params의 객체라서 비구조화 할당이 되고 .params는 위의 :id 부분을 말함 예를들어 /delete/0 이면 파라미터에는 0이 되는거임
  arr.splice(id, 1); // 해당 id번째있는 데이터가 삭제됨
  res.status(200).json({
    message: "delete success",
    result: arr,
  })
})
*/

// index.js 문서에는 서버 로직만 만들어줘야 해서
// 함수가 들어와있으면 번잡해질 수 있음 (미들웨어 등)
// 그래서 미들웨어는 외부파일로 옮긴다.
const loginCheck = require("../module/loginCheck");
// 해당 코드는 "../module/loginCheck" 경로에 위치한 모듈을 불러와서 loginCheck이라는 상수에 할당하는 JavaScript 코드

// req 요청이 들어왔을 때 loginCheck라는 함수가 실행이 되고, 위 함수의 여부에 따라 진행함. (로그인 되어있다면 next()를 통해서 아래 코드를 실행한다. 안되어있다면 else문을 실행)
router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  })
})


module.exports = router;
