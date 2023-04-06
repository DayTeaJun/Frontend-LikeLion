const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`
// 위와 같음
text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)

//// 위 식을 for문으로

const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i = 0; i < cars2.length; i++) {
    text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
text2

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i) // i는 반복문이 끝난 다음에 호출할 수 없다.

for (let i = 0; i < 10; ++i) { // 위 구문과 상관없음 i++ == ++i
    console.log(i)
}

for (let i = 0; i < 10; i += 2) { // 2씩 증감(짝수)
    console.log(i)
}

for (i = 0; i < 10; i += 2) { // let을 생략하면 안됨! i가 전역으로 생성이 됨
    console.log(i)
}

// for (;;) {
//     // 무한반복 코드이다.
//     // 이런 코드는 작성도 하지마
//     // 의도한 무한반복은 매우 위험
//     // 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 간다.
//     // 1. 반복의 시간을 가능하면 정해주기
//     // 2. 탈출 조건을 명확히 해주기
//     console.log('실행하지 마세요.')
// }

for (let i = 0; i < 10;) {
    console.log('실행하지 마세요.')
    i += 1
}

for (let i = 0; ;) {
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) { // 10이 넘어가면 break되어 무한반복 풀림
        break
    }
}

for (; ;) { //무한반복입니다.
    let i = 0
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) {
        break
    }
}

let i = 0
for (; ;) {
    console.log('실행하지 마세요.')
    i += 1
    if (i >= 10) { // 10이 넘어가면 break되어 무한반복 풀림
        break
    }
}