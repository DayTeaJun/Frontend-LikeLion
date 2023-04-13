// JSON은 홑따옴표(')를 허락하지 않음
// - JSON.parse() : JSON문자열을 자바스크립트 객체로 변환한다. (문자열 => 객체)
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.(객체 => 문자열)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json); // 객체로 바꿔줌
console.log(obj)

const json = '[1, 2, 3]';
const obj = JSON.parse(json);
console.log(obj);

const json = '[1, 2, 3]';
const obj = JSON.parse(json);
console.log(obj);

const json = { "result": true, "count": 42 };
const s = JSON.stringify(json); // 문자열로 바꿔줌
s

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l)); // 여기서는 완전히 다른 [10, 20, 30] 을 생성
a[0] = 1000;

console.log(l);

// error
let l = [10, 20, 30];
let a = JSON.parse(`${l}`);
a[0] = 1000;

console.log(l);