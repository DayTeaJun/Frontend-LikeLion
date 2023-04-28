let hello = "first hello";
// let은 블록(중괄호) 스코프다.
// 블록스코프는 말 그래도 블록 {}이 생성될 때마다 새로운 스코프가 형성되는 것을 의미
if (true) {
    let hello = "second hello"
    console.log(hello); // second hello
    // 함수 몸체에 선언한 변수는 해당 함수 안에서만 접근할 수 있음
    // 함수스코프를 따른다? => 새로운 함수가 생성될때마다 새로운 스코프가 발생한다.
}

console.log(hello) // first hello