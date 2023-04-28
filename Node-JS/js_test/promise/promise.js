// pending
// fulfilled
// rejected

function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "hello hello";
        resolve(hello) // 성공했을 경우
        // reject(new Error()); // 실패했을 경우
    })
}

// sayHello()를 실행시키고 끝났을때 .then을 통해 promise 문법을 실행시킴
sayHello().then((resovedData) => {
    console.log(resovedData);
    return resovedData;
})
    .then((resovedData) => { // 이 매개변수는 이전의 리턴값임
        console.log(resovedData);
        return resovedData;
    })
    .then((resovedData) => { // 이런식으로 then을 여러개 사용 가능
        console.log(resovedData);
    })
    .catch((error) => { // reject가 실행됐을 경우 catch가 실행됨
        console.log(error);
    })

// 이렇게 작성하면 사용자가 회원가입할때 용이하다. 데이터가 맞는지, 문자열 검사등 then을 통해 편리하게 관리가능.