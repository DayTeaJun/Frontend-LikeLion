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
const two = (a, b) => (a + b)**2
console.log(two(7, 3)) // 여러번 사용할 수 있다는 것을 명시해서 두번 로그함
console.log(two(7, 3))

// 이름 없이 선언하는 함수
// 함수 표현식
const three = function(a, b) { // 1 input(a,b)
    let z = a + b // 2 (z = a + b)
    return z ** 2 // 3 (z ** 2)
}
console.log(three(7, 3))
console.log(three(7, 3))

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게 c
function four(a, b, c){
    let z = c(a, b) + c(a, b) // c(a, b)은 100, z는 200
    return z * 2 // 400
}
four(7, 3, one) // 아규먼트

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없다.
// 외부에서 직접 값을 가져오는 것을 지양하자.
function four(a, b, c){
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
function hello(){
    console.log('hello')
}

function hello(){
    console.log('hello')
    return
}

function hello(){
    console.log('hello')
    return undefined
}

let a = hello1() // 'hello' undefined
let b = hello2() // 'hello' undefined
let c = hello3() // 'hello' undefined

// return 먼저 만나면 거기서 종료
function hello4(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
hello4() // 'hello' 3번하고 끝남

function hello5(){
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

function 함수1(a, b, c){
    return a + b + c
}
// 에러가 발생해야 하는데 발생하지 않은게 단점
함수1(10, 20, 30, 40) // error가 발생하지 않는다. 자바스크립트의 단점

함수1(10, 20) // NaN으로 return함 error가 발생하지 않는다.

// 초기값 할당가능
function 함수1(a = 10, b = 20, c = 30){
    return a + b + c
}
함수1(1, 1) // 32 1(a) + 1(b) + 30(c) 

function 함수1(a = 10, b = 20, c = 30){
    return a + b + c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어간다.
함수1(a=1, c=1) // 32 32 1(a) + 1(b) + 30(c)

// 아래와 같은 식별 이슈가 있을 경우 object로 넘김, roro기법
function runPython(user, time, code, lv){

}
runPython('leehojun', 100, 'function...', 3)

// object로 넘김, roro기법
function runPython({user, time, code, lv}){

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
    return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수
(function() {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();

function 함수(){

}

함수()