const object = { a: 1, b: 2 }

// const a = object.a; // 객체안의 key값을 통해서 접근가능.
// const b = object.b;

// 비구조화 할당 = 객체안의 값을 상수나 변수안에 할당 시킬 수 있는 문법
const { a, b } = object; // key를 바탕으로 값을 출력할 수 있음

console.log(a);
console.log(b);

const array = [1, 2];
// 비구조화 할당 배열도 가능
// 배열이나 객체 안에 있는 값들을 변수나 상수에 선언할수 있도록 하는 문법
const [one, two] = array; // 배열의 값을 one, two에 할당

console.log(one);
console.log(two);