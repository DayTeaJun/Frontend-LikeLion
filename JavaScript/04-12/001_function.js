// 4월 4일 코드 + 맨 아래 4월 12일 코드가 있음

// 함수
// 1. 재사용성이 높아집니다.
// 함수를 한번 선언하면 그 함수를 단축해서 반복 사용 가능
function one() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 함수의 일반적인 형태
// 함수 선언문
// 파(a,b)선아실
function one(a, b) { // 1. 파라미터 선언(a,b)
    let z = a + b // 2. (z = a + b)
    return z ** 2 // 3. (z ** 2)
}

console.log(one(7, 3)) // (7, 3) 아규먼트(들어가는 값)
console.log(one(7, 3))

// 화살표 함수
const two = (a, b) => (a + b) ** 2
console.log(two(7, 3)) // 여러번 사용할 수 있다는 것을 명시해서 두번 로그함
console.log(two(7, 3))

// 이름 없이 선언하는 함수
// 함수 표현식
const three = function (a, b) { // 1 input(a,b)
    let z = a + b // 2 (z = a + b)
    return z ** 2 // 3 (z ** 2)
}
console.log(three(7, 3))
console.log(three(7, 3))

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게 c
function four(a, b, c) {
    let z = c(a, b) + c(a, b) // c(a, b)은 100, z는 200
    return z * 2 // 400
}
four(7, 3, one) // 아규먼트

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없다.
// 외부에서 직접 값을 가져오는 것을 지양하자.
function four(a, b, c) {
    let z = one(a, b) + one(a, b)
    return z * 2
}
four(7, 3, one)


// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return, console.log를 헷갈려함
function hello(para) {
    console.log(para) // 10
    console.log('hello') // 'hello'
    return 100
}

console.log(hello(10)) // 위 함수가 리턴되어 100이 됨
let x = console.log('hello')
x // undefined // return값이 없기 때문

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수
let x2 = console.log
x('hello')

// 아래 3개 코드는 같다 console.log
function hello() {
    console.log('hello')
}

function hello() {
    console.log('hello')
    return
}

function hello() {
    console.log('hello')
    return undefined
}

let a = hello1() // 'hello' undefined
let b = hello2() // 'hello' undefined
let c = hello3() // 'hello' undefined

// return 먼저 만나면 거기서 종료
function hello4() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
hello4() // 'hello' 3번하고 끝남

function hello5() {
    if (true) {
        if (false) { // 이 값을 바꿔보셈 // false면 console.log 실행, true면 undefined
            if (true) {
                return
            }
        }
    }
    console.log('hello')
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아니다.
const x3 = [10, 20, 30, 40];
x3.forEach(el => {
    console.log(el)
    return
    console.log('world')
}); // 10 20 30 40 출력


///////////////////////////

function 함수1(a, b, c) {
    return a + b + c
}
// 에러가 발생해야 하는데 발생하지 않은게 단점
함수1(10, 20, 30, 40) // error가 발생하지 않는다. 자바스크립트의 단점

함수1(10, 20) // NaN으로 return함 error가 발생하지 않는다.

// 초기값 할당가능
function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
함수1(1, 1) // 32 1(a) + 1(b) + 30(c) 

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어간다.
함수1(a = 1, c = 1) // 32 32 1(a) + 1(b) + 30(c)

// 아래와 같은 식별 이슈가 있을 경우 object로 넘김, roro기법
function runPython(user, time, code, lv) {

}
runPython('leehojun', 100, 'function...', 3)

// object로 넘김, roro기법
function runPython({ user, time, code, lv }) {

}

runPython({
    user: 'leehojun',
    time: 100,
    code: 'function...',
    lv: 3
})

// 기본 값 설정
function runPython({
    user = '',
    time = 0,
    code = '',
    lv = 0
})

//////////////////////////////////

//화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => {
    if (true) {
        console.log('hello world')
    }
    return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수
(function () {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();

function 함수() {

}

함수()

// 4월 12일 코드

// https://www.howdy-mj.me/javascript/early-return

// 4월 12일 코드
// 1. object처럼 사용되는 함수의 특성
function 함수(a, b) {
    return a + b
}

function 함수2(a, b, c) {
    const z = a + b + c
    return z
}

function 함수3(a, b, c, d, e, f) {
    return a
}

console.dir(함수1)
console.dir(함수2)
console.dir(함수3)

// length가 파라미터의 수인 것을 확인했습니다.

// array, object, function가 모두 같은 방식으로 접근하거나 값을 변경할 수 있네?
함수['location'] = 'jeju'
console.dir(함수)


함수['name'] = 'jejufunction'
console.dir(함수)
// name은 변경되지 않는다.
// console.dif(sdsaddw) // 이렇게 호출이 되지 않는다.

함수['length'] = 5
console.dir(함수) // 변경이 되지 않습니다.

// 2. 아규먼트가 순서대로 들어가는 함수의 특성
function 함수(a = 10, b = 20, c = 30) {
    return a + b + c
}
함수()
함수(100)
함수(100, 200) // 330
// 이때 30이 디폴트값 = 내가 값을 넣지 않아도 있는 초기값
함수(100, 200, 300)
함수(c = 300) // 330이 아니고 350입니다. 순서대로 들어갑니다.
함수(a = 100, c = 300)
// c=는 무시되고 순서대로 아규먼트가 들어간다.
함수(a = 100, b = 300, c = 200) // 순서가 뒤바뀌면 hell
함수(a = 100, c = 200, b = 300) // hell입니다.

// 3. roro기법 원리 설명
// roro 기법은 무엇인가요? 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출 하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
window.addNewControl("Title", 20, 50, 100, 50, true);
// 여러분들이 코드를 쭉 읽어 내려가다가 저 함수를 만났습니다. 기분이 어떨 것 같으신가요?

// python 형식입니다.
window.addNewControl(
    title = "Title",
    xPosition = 20,
    yPosition = 50,
    width = 100,
    height = 50,
    drawingNow = true
);

// roro 기법을 모든 함수에서 사용하나요?
function sum(a, b) { }

// 어떻게 사용하고 원리는 무엇인가요?
function 로그인정보({
    회원등급 = 'Gold',
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '1주일 이내 가능',
    소셜로그인여부 = true
}) {
    console.log('...함수 기능...')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
}

로그인정보({
    회원등급: 'Silver',
    소셜로그인여부: false, // 순서까지 바꿈
    백업: '3일 이내 가능' // 중간에 생략된 값도 있고
})
// 정상적으로 작동한다.

// 원리(모르셔도 코딩하는데 지장있진 않습니다.)
let one;
let two;
let three;

let four = { one, two, three }
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것이 최근이다.
// '이렇게'는 변수 값을 object안에 넣으면 변수명이 key가 되고 변수의 값이 object의 value가 되는 문법을 얘기함.

let { one, two, three } = { one: 10, two: 20, three: 30 }
let { one, two, three } = { two: 20, one: 10, three: 30 }
// 왼쪽에서 one과 two, three는 변수
let { one:10, two, three } = { two: 20, one: 10, three: 30 } // error 변수에 할당하는게 아니기 때문
let { one = 100, two, three } = { two: 20, three: 30 } // 할당

// 살짝 심화
// 위 코드에서 로그인정보({}) 호출 했을 때는 error가 안나지만 로그인정보() 호출했을 경우에는 error가 납니다.
function 함수({
    a = 1,
    b = 2,
    c = 3
} = {}) {
    console.log(a, b, c)
    return a + b + c
}
함수() // 6
함수({}) // 6
함수({ b: 100 }) // 104

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100} // one = 100, two = 2 출력
// let {one = 1, two = 2} = {} // one = 1, two = 2
// let {a=10, b=20, c=30} = undefined // error

// roro 참고글 : https://www.gunhee.co.kr/2b100bb5-ad82-4bcb-b89c-068b4c70bfae