// API 서버 구축
// 요청(클라이언트)을 받고 그에 대한 응답(서버)을 하는 서버

const http = require("http") // 서버를 쉽게 구축할 수 있는 패키지 http

http
    .createServer((req, res) => { // 서버 생성하고, 그에 대한 콜백함수로 requset랑 response를 받아서 요청과 응답을 진행할 수 있는 함수
        if (req.url === "/") { // 이러한 if else if 같이 요청에 맞게 분기처리를 하는 것이 라우터라고 함
            res.writeHead(200); // 응답을 보냈을 때 정상적으로 보냈다면 (200번)
            res.end("main url"); // 서버 주소에 '/' 있다면 실행하고 응답으로 main url을 표시
        } else if (req.url === "/upload") {
            res.writeHead(200); // 잘 응답했는지 확인
            res.end("upload url") // 서버 주소에 '/upload' 있다면 실행하고 응답으로 upload url을 표시
        } else if (req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url");
        } else { // 만약 해당 url에 해당 요청의 응답이 없을 때
            res.writeHead(404); // 오류페이지
            res.end("Not found!!")
        }

    })
    .listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료~!!")
    })

    // 서버 끄는법 Ctrl + C