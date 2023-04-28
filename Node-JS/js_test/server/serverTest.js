const http = require("http") // require은 해당 패키지를 불러오는 역할
http.createServer((req, res) => { // request은 요청보낼때, response는 응답보낼때 (클라이언트한테)
    res.writeHead(200, { "content-Type": "text/html" }) // 헤더값을 추가해서 보냄 200번은 응답을 잘 보냈을 때, 두번째 인자는 html을 반환하겠다는 것을 명시
    res.end("<p>hello world!!</p>") // 클라이언트한테 응답 보낼 코드
}).listen(3000, () => { // 서버를 실행할 코드 (3000번은 포트번호), 서버완료가 되면 아래코드 실행
    console.log("3000번 포트 서버 접속 완료~!!")
})

// 서버 접속방법 http://localhost:3000/
// localhost는 현재 컴퓨터의 내부주소로 서버 개발할 때 테스트(또는 유지보수) 용으로 많이 쓰인다.
// localhost = 127.0.0.1(IP)
// 포트(PORT) 서버내의 프로세스를 구분하는 번호 (HTTP는 80번호 HTTPS는 443번호 DB는 27017번호)
// 순서 localhost(127.0.0.1) => port번호(서버의 다양한 기능을 처리할 수 있도록 분리해놓은 것) => server