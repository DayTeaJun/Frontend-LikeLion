// 고급 템플릿 리터럴(React) 문법을 한 번 더 합니다.

const x = 10;
const y = 20;
console.log('x값은 10이고 y값은 20이고 두개를 곱한 값은 200입니다.')
console.log('x값은 ',x,'이고 y값은 ',x,'이고 두개를 곱한 값은 ',x*y,'입니다.')
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x*y}입니다.`) // 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않습니다.

const x2 = 10;
const y2 = 20;
const result = x2 * y2; // 이렇게 해야 유지보수가 용이함
console.log(`x값은 ${x2}이고 y값은 ${y2}이고 두개를 곱한 값은 ${x2*y2}입니다.`)

console.log(`h
e
l
l
o`) // `` 로 묶어주면 개행(\n) 줄바꿈을 할 수 있음

const s = 'hello'
const ss = 'world'
const result2 = s + '\n' + ss
console.log(result2)

// 템플릿 리터럴 `` 을 쓰되,
// 단점을 '굳이' 뽑자면
if (true) {
    if(true) {
        if(true){
            console.log(`h
            e
            l
            l
            o`)
        }
    }
}

// 가독성이 떨어짐 아래처럼 작성해야 개행이 적용됨.
if (true) {
    if(true) {
        if(true){
            console.log(`h
e
l
l
o`)
        }
    }
}