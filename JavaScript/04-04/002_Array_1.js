// arr(*****)
const arr = [10, 20 ,30] // 배열도 const로 선언
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았나? // 변경 가능, mutable
// arr[]는 위 배열의 메모리 주소를 가리키는 것이라서, 주소가 변경되는 것이 아닌 메모리 안의 값이 변경되는 것은 문제 없음
console.log(arr)
console.dir(arr) // 프러퍼티와 메서드(프로퍼티 값이 함수일 경우, 객체에 제한되어 있는 함수)를 볼 수 있다
// JavaScript 객체 속성을 인터랙티브한 목록으로 표시

// 문자'열'(string) // 문자'형'이 아니다
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 안됨 불변, immutable

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자이다. 문자로 입력된 값은 .을 찍어서 호출할 수 있다. 
arr[1]
arr.length
arr['length']
// 프로퍼티 1,2,3 length

// 두개가 같은 얘기(둘다 값을 변경시킴)
arr.length = 10 // 값이 할당이 안됬으면, empty값으로 만들어 두고 값이 추가될 때마다 empty자리를 먹음
arr[0] = 100

// 프로퍼티를 추가하는 것도 가능
arr['leehojun'] = 100
arr.hojun = 1000

// 배열의 특징
// 배열은 빈 배열로 생성하거나 요소가 포함된 배열로 생성할 수 있습니다.
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3); // length가 3인 empty 생성
// Array(100).fill(0) 100개의 원소에 0을 채움

// 1. 배열은 순서가 있다.
// 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 한다.
// 배열 안에 값을 원소(elements)라고 한다.
const arr = [10,20,30]

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있다.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

arr[0]
// [1, 2, 3]
arr[1]
// [4, 5, 6]
arr[2]
// [7, 8, 9]
arr[1][2]
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라 (1차원)
const b = [10, 20, 30] // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // 메트릭스
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산이다.

// 배열의 요소 추가
const arr = [1, 2, 3];
arr.push(4)
console.log(arr); // [ 1, 2, 3, 4 ]

// push 실무 예제
// let tableBodyData = []
// for (const iterator of data) {
//     tableBodyData.push(`          
//         <tr>
//             <td>${iterator['a']}</td>
//             <td>${iterator['b']}</td>
//             <td>${iterator['c']}</td>
//             <td>${iterator['d']}</td>
//             <td>${iterator['e']}</td>
//             <td>${iterator['f']}</td>
//         </tr>
//     `)
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

const arr = [1, 2, 3, 4, 5]
arr.pop()
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return)
// 5
arr
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop() // lastValue에 5값이 들어감
arr
// (4) [1, 2, 3, 4]

// unshift 
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이","배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return)
let myArray = ["사과", "바나나", "수박"];
// myArray.shift(); // '사과'
// console.log(myArray); // ['바나나', '수박']

let firstValue = myArray.shift();
firstValue
// 사과

// 문제 *****
// ||답변||으로 답해주세요.
// pop, shift, unshift, push에 대해 설명해주세요

// push는 배열의 맨뒤에 값을 추가
// pop은 배열의 맨마지막에서 값을 꺼내고 꺼낸 값을 반환
// shift는 배열의 맨앞에서 값을 꺼내고 꺼낸 값을 반환
// unshift는 배열의 맨앞에 값을 추가


// arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
// 스프레드 오퍼레이터(...)는 펼침연산자로 아래 경우 대괄호 제거해줌
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

// slice는 원본값을 건드리지 않음
// splice가 원본값을 건드림 (deleteCount로 원본값을 건드림)
// 공통점은 각 요소의 배열을 실행함



// 문제
const arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 1, 2, 3, 40, 50]
// splice만 사용하여 위처럼 만들기
arr.splice(1, 0, ...x);
arr.splice(6, 0, ...x);

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 1, 5); // arr에 2번째에, 1개 삭제하고, 5를 넣는다
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 의도한 대로 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환한다.

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제하고, 삽입되는 값은 없다. // [30, 40]
arr // [10, 20, 50]

const arr = [10, 20, 30, 40, 50]
arr.splice(1) // [20, 30, 40, 50] 1번째부터 삭제
arr // [10]

const arr = [10, 20, 30, 40, 50]
arr.splice(2) // [30, 40, 50]
arr // [10, 20]


// arr.slice(start, end)
const myArray2 = ["apple", "banana", "cherry", "durian", "elderberry"]
console.log(myArray2.slice(1, 4)) // ['banana', 'cherry', 'durian']
console.log(myArray2) // ['apple', 'banana', 'cherry', 'durian', 'elderberry'] 원본은 살아있음
myArray2.slice(1) // ['banana', 'cherry', 'durian', 'elderberry'] 첫번째를 제외해고 반환
myArray2.slice(0, 100) // 0부터 100까지 반환

const arr = [10, 20, 30, 40, 50]
// arr.forEach(함수) // arr를 순회를 돔
// 함수(callbackfn): (value: number, index: number, array: number[])
// callback function (나중에 부르는 함수)
arr.forEach(function(item, index){
    // item = arr[]의 값, index = arr[]의 인덱스
    console.log(index, item)
})
// 결과 값
// 0 10
// 1 20
// 2 30
// 3 40
// 4 50

arr.forEach(function (item, index) {
    console.log(index, item)
    console.log('hello')
    console.log('world')
})

arr.forEach(function (item, index, arr) {
    console.log(index, item, arr)
    console.log('hello')
    console.log('world')
})

// 실무에서 사용하는 코드는 아님
const arr = Array(100).fill(0)
const arr2 = []
// forEach는 순회를 돌면서 각 요소에 무언가를 하고 싶을 때 사용
arr.forEach(function(item, index){ // item은 value
    arr2.push(index) // arr2에 0~99까지 index를 넣음
})

// 같은 코드를 다양한 방법으로 함수 사용
arr.forEach(function(item, index){
    arr2.push(index+1)
}) // 위와 아래의 코드는 같다. 화살표 함수
arr.forEach((item, index) => { // 화살표 함수
    arr2.push(index+1)
}) // 위와 아래(주로 실무에서 사용함)의 코드는 같다.
arr.forEach((item, index) => arr2.push(index+1)) // 화살표 함수(중괄호 사용)
// 위와 아래(이렇게 사용하진 않음)의 코드는 같다.
function hojun(item, index) {
    arr2.push(index+1)
}
arr.forEach(hojun) // 함수를 아규먼트로 받았기 때문에 콜벡함수이다.

// 여기까지 봤음

// 어제 진행했었던 코드
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            console.log(item.thumbnailImg)
            console.log(item.productName)
            console.log(item.price)
        })
    })

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다르다.
// nodeList에서 forEach는 익스플로러를 지원하지 않는다.

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// map (면접 질문에서도 많이 나온다. 데이터를 뽑으려고 많이 사용한다.)
// map은 forEach와 다르게 새로운 배열을 생성한다. 그래서 return(반환)값을 생성해줘야 함

const arr = [1, 2, 3]
arr.map(function(item, index){
    return item ** 2 // [1, 4, 9]
})

arr.map(function(x){
    return item ** 2 // [1, 4, 9]
})

arr.map(x => x ** 2)  // [1, 4, 9]

const arr = Array(100).fill(0)
arr.map((v, i) => i) // Array(100)안에 벨류값을 인덱스값으로 채움
// 같은 코드
arr.map((v, i) => i)
// 같은 코드 2
arr.map(function(v, i){
    return i
})
// 같은 코드 3
function hojun(v, i){
    return i

}
arr.map(hojun) // 함수를 아규먼트로 받았기 때문에 콜벡함수이다.
// 같은 코드 4
arr.map((v, i) => {
    return i
})




// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5]
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop()) // 전개구문
let tip2 = [...tip1] // tip1을 복사
console.log(tip2.pop()) // 5
console.log(tip2) // [1, 2, 3, 4]

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]

console.log([...tip3, 1000, ...tip4])
// [1, 2, 3, 4, 5, 1000, 10, 20, 30, 40, 50]

const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat()) // 다차원 배열일 때 가로로 쭉 평평하게 퍼짐

const tip6 = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
]
tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0) // Array(10).fill(0)도 됨
const tip8 = Array.from('hello') // ['h', 'e', 'l', 'l', 'o']

// '.'.repeat(100).split('.') // 권하진 않음

let tip9 = [1, 2, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)])
// tip9.slice(0, 2) 는 [1, 2] 0부터 2바로 직전까지 반환
// tip9.slice(2, 5) 는 [3, 4, 5] 2부터 5바로 직전까지 반환

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
tip10 // [1, 2, 1000, 3, 4, 5]

// map하고 다시 오겠습니다.
const tip11 = Array(100).fill(0).map((v, i) => i + 1)


const tip12 = [
    {
        "_id": "642ba3980785cecff3f39a8d",
        "index": 0,
        "age": 28,
        "eyeColor": "green",
        "name": "Annette Middleton",
        "gender": "female",
        "company": "KINETICA"
    },
    {
        "_id": "642ba398d0fed6e17f2f50c9",
        "index": 1,
        "age": 37,
        "eyeColor": "green",
        "name": "Kidd Roman",
        "gender": "male",
        "company": "AUSTECH"
    },
    {
        "_id": "642ba39827d809511d00dd8d",
        "index": 2,
        "age": 39,
        "eyeColor": "brown",
        "name": "Best Ratliff",
        "gender": "male",
        "company": "PRISMATIC"
    }
]


// askup

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);