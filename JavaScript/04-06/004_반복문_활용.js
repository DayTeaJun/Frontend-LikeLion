// 컨벤션
// https://github.com/airbnb/javascript#iterators-and-generators
// 11.1 : 순회 대신 메서드
// 15.1 : 비교
// 18.1, 18.4, 18.5 : 코멘트
// 19.1 : 공백


// https://google.github.io/styleguide/jsguide.html#features-for-loops : 
// 반복구문에서는 가능하면 for of, object에서는 for in


// https://ui.toast.com/fe-guide/ko_CODING-CONVENTION#for-in%EB%AC%B8-%EC%95%88%EC%97%90%EC%84%9C%EB%8A%94-hasownproperty-%EC%A1%B0%EA%B1%B4-%EA%B2%80%EC%82%AC%EB%A5%BC-%EC%88%98%ED%96%89%ED%95%9C%EB%8B%A4 :
// 반복구문에서는 hasOwnProperty 조건 검사를 수행


// https://ko.javascript.info/array#ref-830(모던자바스크립트): Array 순회에서 권하지 않음

// 일반적인 for문 이호준님은 권장하지 않는다 하심
for (let i = 0; i < 10; i++) {

}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// IE에서도 모두 사용 가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = { 'one': 10, 'two': 20 }
// array에서 for in문을 쓰지 않기를 권해드립니다. (객체에 사용할 때 최적화되있음)
for (const i in arr1) {
    console.log(arr1[i]); // i가 index를 가져온다.
}

for (const i in obj1) {
    console.log(obj1[i]); // i가 key를 가져온다.
}

for (const i in 'hello') {
    console.log(i) // i가 문자열의 각 인덱스값을 가져옴
}

let s = 0
for (const i in '.'.repeat(101)) {
    s += parseInt(i)
}
console.log(s)

// 많은 컨벤션에서 권장(다만 배열의 순회는 map, forEach를 더 권장)
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용 가능
let arr2 = [10, 20, 30, 40, 50]
let obj2 = { 'one': 10, 'two': 20 }

for (const item of arr2) {
    console.log(item) // index가 아닌 '값'을 가져옴
}

let s2 = 0
for (const item of arr2) {
    s2 += item
}
console.log(s2)

for (const item of obj2) { // of 뒤에 iterable(순회 가능, 순서가 있는)한 값이 나와야 함.
    console.log(item) // error
}

for (const item of 'hello world') { // 순서가 있음
    console.log(item) // h, e, l, l ...
}

// why? for of와 for in문에서는 const가 가능한가요?
// 명세서에서 이렇게 쓰라해서 써야되는 것 정도만 알고 넘어가면 됨
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst

for (const i = 0; i < 10; i++) { // for문은 let이 있어야 증감식(i++)이 적용됨
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x) // 스코프안에서 선언되서 error

// 명세서에서 const 쓰라해서 const로 쓰는거
for (const i in [1, 2, 3]) {
    console.log(i) // 0 1 2
}

for (const i of [1, 2, 3]) {
    console.log(i) // 1 2 3
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i + 1]) // 마지막 값을 확인해보세요(마지막이 undefined)
    console.log(s[i + 1] - s[i])
}

for (let i = 0; i < s.length - 1; i++) { // length에 -1을 준 이유는 range가 밖으로 나가서 그렇다.
    console.log(s[i], s[i + 1])
    console.log(s[i + 1] - s[i])
}
// 위와 아래 코드는 같음
for (let i = 1; i < s.length; i++) {
    console.log(s[i - 1], s[i])
    console.log(s[i] - s[i - 1])
}

// 위보다 깔끔한 코드가 나오지 않음
s = [1, 3, 4, 8, 13, 17, 20]
for (const i of s) {
    console.log(parseInt(i))
    console.log(s[i], s[parseInt(i) + 1]) // 이것도 위 첫번째처럼 undefined가 생김
}

// 문제1
// 다음 수학 점수의 평균을 구하세요.
수학점수 = [10, 99, 89, 70]
// step1 어떻게 계산 결과가 나오는지 확인
수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3] / 수학점수.length
// step2 반복되는 패턴을 뺌
for (let i = 0; i < 수학점수.length; i++) {
    s += 수학점수[i];
}
console.log(s / 수학점수.length)

// 문제2
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 33,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]
// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let s3 = 0
for (let i = 0; i < user.length; i++) {
    console.log(user[i]['age'])
    s3 += user[i]['age']
}
// console.log(Math.floor(s / user.length))
console.log((s3 / user.length).toFixed(2))

///

for (const i of user) {
    s3 += i.age // i값의 age값
}
console.log((s3 / user.length).toFixed(2))

///

for (const i in user) {
    s3 += user[i].age
}
console.log((s3 / user.length).toFixed(2))

///// 심화 수업(기억하지 않으셔도 됩니다.) /////
let user2 = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(s) // 마지막에 102
    console.log('----------')
    s += i.age // 마지막에 undefined + 102
}
console.log((s / user.length).toFixed(2))

///

let s4 = 0
for (const i of user2) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(s4) // 마지막에 102
    console.log('----------')
    s4 += i.age ?? 0 // i.age가 undefined들어오면 0으로 반환
}
console.log((s4 / user2.length).toFixed(2))

// step 1 위 코드 작동 순서
console.log(user[0])
console.log(user[0].age)
console.log(s)
console.log('----------')
s += user[0].age ?? 0

// step 2
console.log(user[1])
console.log(user[1].age)
console.log(s)
console.log('----------')
s += user[1].age ?? 0

// ... 생략 ...

///

s = 0
for (const i of user2.map((v, i) => v.age)) {
    if (!!i) { // 값이 있으면 반환 undefined가 나오면 더해주지 않음(false기 때문)
        s += i
    }
}
console.log((s / user2.length).toFixed(2))

s = 0
for (const i of user2.map([31, 32, 39, undefined])) {
    if (!!i) { // 값이 있으면 반환 undefined가 나오면 더해주지 않음(false기 때문)
        s += i
    }
}
console.log((s / user2.length).toFixed(2))

///
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 //true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

//// 외우세요. ////
user
    .map(v => v.age) // 매개변수 v에 v.age값 넣음 [31, 32, 39, undefined]
    .filter(v => !!v) // true값만 필터링 [31, 32, 39]
    .reduce((a, b) => a + b, 0) // 누산기a에 b(현재값)을 계속 더함 102