/* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number, and is not equal to anything, including Not a Number. */

// console.log(NaN === NaN);
// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

/* 
Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 이것은 알고리즘이 먼저 피연산자 중하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다.
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log('hello world' - 100) // NaN
console.log('hello world' / 100) // NaN
console.log('hello world' * 100) // NaN
console.log('2' * 10) // 20
console.log("---");


// 암기
// 참고: https://on1ystar.github.io/javascript/2021/03/30/JavaScript-7/
// NaN을 반환하는 연산
// 숫자로서 읽을 수 없음 ex) parseInt("어쩌구"), Number(undefined)
// 결과가 허수인 수학 계산식 ex) Math.sqrt(-1)
// 피연산자가 NaN ex) 7 ** NaN
// 정의할 수 없는 계산식 ex) 0 * Infinity, 0 / 0
// 문자열을 포함하면서 덧셈이 아닌 계산식 ex) "가" / 3
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

// isNaN() 함수는 어떤 값이 NaN인지 판별
// 인수가 Number형이 아닌 경우, 그 값은 먼저 숫자로 형 변환후, NaN인지 판별하기 때문에 예상치 못한 결과를 내기도 함
console.log(isNaN(undefined)); // true
// Number(undefined)가 NaN을 반환하기 때문
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입(암기) * // isNaN의 문제를 해결하기 위해 추가 도입
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/