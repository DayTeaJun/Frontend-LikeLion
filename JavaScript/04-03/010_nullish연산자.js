// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)이 필요합니다.

let firstName = null;
let lastName = null;
let nickName = '바이올렛';

console.log(firstName ?? nickName) // firstName이 비어있다면 뒤의 nickName을 변환
console.log(firstName ?? lastName ?? nickName)
console.log(firstName ?? lastName ?? nickName ?? '익명사용자') // 앞의 값들이 다 null이라면 '익명사용자' 출력
console.log(firstName ?? lastName ?? nickName ?? '익명사용자') //

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c) // null 값인지 판단하고 null 이 아니라면 변환

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100) // 100 0은 false이므로 뒤에꺼 까지 봄
console.log(height ?? 100) // 0 height가 null 인지 묻고 값이 있으므로 0

let height2;
console.log(height2 || 100) // 100 undefined이므로 뒤에꺼 봄
console.log(height2 ?? 100) // 100 undefined이므로 100

let height3 = '';
console.log(height3 || 'hello') // 100
console.log(height3 ?? 'world') // '' 출력

// 지금 주석으로 다는 내용은 여기서는 몰라도 됨
// 판단여부
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined