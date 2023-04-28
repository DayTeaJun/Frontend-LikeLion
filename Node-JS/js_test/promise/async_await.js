function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "hello hello";
        resolve(hello) // 성공했을 경우
    })
}

async function test() {
    const hello1 = await sayHello(); // await는 비동기는 밑에 코드가 먼저 실행되기 때문에 비동기를 다 처리한 후 아래 코드를 사용하겠다 가 가능
    console.log(hello1); // 위에 await로 비동기인 내용을 다 실행하고 이 줄의 코드가 실행됨.
}

test();