let x = 0
while (x < 10) { // false가 되면 탈출
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
    // console.log('end') 가 없다면 마지막 계산된 10값이 반환된다.
}

/////
// why? 10까지 출력이 되는가?
// 일반 JS에서는 출력되지 않습니다.
// 콘솔에서만 출력됩니다.
let x2 = 0
while (x2 < 10) {
    console.log(x2)
    x2 += 1 // 10 // while문에서 리턴하는게 아닌 마지막 구문에서 리턴함
}

let x3 = 0
while (x3 < 10) {
    console.log(x3)
    x3 += 1
    console.log('') // while문에서 리턴하는게 아닌 마지막 구문에서 리턴함
}

let z = 1
z += 1
z += 1
z += 1 // 여러번 해보세요. x값이 출력되는데 개발자 편의를 위해 제공하는 기능입니다. 
/////

/////

let input;
do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input)); // isNaN 인수가 숫자이면 false를 반환
// 그래서 탈출하면 밑의 console.log로 넘어감 , isNaN은 쓰지않는다. Number.isNaN
console.log("입력한 숫자는 " + input + "입니다.");

let input2;

do {
    input2 = confirm('다음에도 저희와 함께 하시겠습니까?')
} while (!input2); // 확인일 때 멈춤, 취소하면 계속 반복
console.log("감사합니다.");

// 암기코드 1 (3분내에 못짜면 암기해라)
// 구구단
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}

let i = 2;
while (i < 10) {
    let j = 1; // 초기화 코드를 넣어야 실행이됨
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`)
        j++;
    }
    i++;
}

// 오답
{ // 밖의 let과 중복되지 않게 중괄호로 묶음
    let i = 2;
    let j = 1;
    while (i < 10) {
        // j = 1 // 이 코드를 넣으셔야 정답이 됩니다.
        // 안넣으면 j가 10이상 가서 while문을 탈출함
        while (j < 10) {
            console.log(`${i} x ${j} = ${i * j}`);
            j++;
        }
        i++;
    }
}

// 암기코드 2
let s = 'hello world'
let result = ''
for (let i = 0; i < s.length; i++) {
    console.log(i)
    result = result + s[i]// result += s[i]
}
console.log(result)

let s2 = 'hello world'
let result2 = ''
for (let i = 0; i < s2.length; i++) {
    console.log(i)
    result2 = s2[i] + result2
}
console.log(result2) // hello world 뒤집기

// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + 'h' => 'eh'
// s[2] + result => 'l' + 'eh' => 'leh'
// ...

let s3 = 'hello world'
let result3 = ''
let count = 0
while (count < s.length) {
    result3 = s3[count] + result3
    count++
}
console.log(result3)

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s4 = 1;
for (let i = 1; i < 6; i++) {
    s4 *= i // s = s * i
}
console.log(s4);

// s = s  *  i // 1 * 1
// s = 1  *  2
// s = 2  *  3
// s = 6  *  4
// s = 24 *  5

let s5 = 1;
i = 1;
while (i < 6) {
    s5 *= i
    i += 1
}

console.log(s5)