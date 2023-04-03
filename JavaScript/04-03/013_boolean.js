// 별표 ****

let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false


// true, false 값을 and, or 연산했을 경우
let a = true;
let b = false;

console.log(a && b); // false

// true, false가 아닌 값을 and, or연산했을 경우 단락회로평가를 하게 된다.
let a2 = 'hello';
let b2 = '';

console.log(a2 && b2); // 앞이 false 경우 뒤를 안봄, 뒤의 ''값은 단락회로평가기 때문에 ''를 반환함

console.log(Boolean('hello')) // 문자열이 있으면 true
console.log(Boolean('')) // 아무것도 없으면 false
console.log(Boolean([1, 2, 3])) // true
console.log(Boolean([])) // 말도 안되게 true
console.log(Boolean({'one':10, 'two':20})) //true
console.log(Boolean({})) // 말도 안되게2 true
console.log(Boolean(0)) // false
console.log(Boolean(-1)) // true
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false

if (undefined){
    console.log('hello')
}

let c;
if (c){
    console.log('hello')
}

// 아래 코드가 실행되는지에 대한 견고한 코드를 짤 수 있다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let cc;
if (cc > 100){
    console.log('hello')
}