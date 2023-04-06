// random은 확률적으로 random이 맞나?
// 게임 확률

let answer = Math.floor(Math.random() * 100)
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식이다.
// ~~(Math.random()*100) // 숫자에 ~연산을 하게되면서 소수점들은 버려지게된다. 즉, ~~를 활용하면 Math.floor() 처럼 활용할 수 있다.
// https://velog.io/@proshy/JS-tilde%EA%B3%BC-double-tilde%EC%97%B0%EC%82%B0%EC%9E%90
let count = 0

for (; ;) {
    count += 1
    let userInput = parseInt(window.prompt('값을 입력해주세요!')) // window는 전역객체 이기때문에 prompt()만 써도 됨
    if (answer > userInput) {
        window.alert('Up')
    }
    else if (answer < userInput) {
        window.alert('Down')
    }
    else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    }
    else {
        window.alert('Correct!')
        break;
    }
}

console.log(`${count}번째 맞추셨습니다.`)