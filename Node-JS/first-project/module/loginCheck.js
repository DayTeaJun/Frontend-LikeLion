// 미들웨어 : 요청(req)과 응답(res)사이에 위치하고 특정 기능을 수행하는 기능(미들웨어 없으면 같은 요청응답 여러개가 있으면 그 만큼 만들어줘야함) 아래의 loginCheck 함수가 그 예시다.
const loginCheck = (req, res, next) => {
    const userlogin = false;
    if (userlogin) { // 유저가 로그인 됬는지 아닌지 가정함
        next(); // userlogin이 정상적으로 작동하면 넘어감
    } else {
        // response를 통해 실패했다고 알림.
        res.status(400).json({
            message: "login fail!!"
        })
    }
}

// 해당 미들웨어 코드를 index.js 파일에서 사용하게 하기 위해
module.exports = loginCheck;