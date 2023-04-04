const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 짝수
arr.filter(function(el){ // el 엘레먼트, value, item
    return el % 2 === 0
}) 

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1) // _은 의미없는 값을 넣음 n개의 array이가 만들어짐
        // '_' 은배열 요소의 값(value)을 의미
        // `_`는 사용하지 않는 매개변수를 명시적으로 표시하는 것
        .filter((v) => v % 2 === 0) // 2로 나눠진 값을 넣음
        .reduce((a, c) => a + c, 0); // 메서드 체이닝은 개행가능
        // 메서드로 배열의 모든 요소를 더한 값을 반환합니다. 초기값으로 0을 사용합니다.
}

// 홀수
arr.filter(function(el){ // el 엘레먼트, value, item
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))
//- `Array.from('hello world')`: 'hello world'라는 문자열을 배열로 변환합니다.
// - `.filter(v => !["a", "e", "i", "o", "u"].includes(v))`: 배열에서 모음을 제외하고, 나머지 문자들만 남기기 위해 filter() 메서드를 사용합니다. 배열의 각 요소가 매개변수 v로 전달되며, v가 모음이 아닐 경우에만 true를 반환합니다.
// - 따라서 최종적으로 새로운 배열에는 'h', 'l', 'l', ' ', 'w', 'r', 'l', 'd'라는 문자열만 남게 됩니다.

// reduce
const arr2 = [1, 2, 3, 4, 5]
arr2.reduce((a, c) => a + c, 0)
// reduce()는 reduce(콜백함수, 초기값)의 형태, 배열의 각 요소가 주어진 콜백함수를 거치게 된다.
// reduce는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를만든다.
// 이 코드는 현재 배열 요소의 값을 누적시키면서 합계를 계산한다.
// 0은 초기값(초기값이 없다면 배열의 첫번째 요소인 0번 인덱스), a는 accumulator(콜백의 반환 값을 누적), c는 currentValue(현재 배열 요소)
// 따라서, 최종적으로 `reduce()` 메소드는 배열의 모든 요소를 더한 값을 반환
// 해당 코드에서는 1 + 2 + 3 + 4 + 5 = 15가 반환된다.

const arr3 = [1]
arr2.reduce((a, c) => a + c)
// 0 초기값을 넣어야 함
const arr4 = []
arr2.reduce((a, c) => a + c, 0)

// min, max도 있지만 sum이 없다

// includes
const arr5 = ['hello', 'world', 'hojun']
arr3.includes('world') // true

const arr6 = ['hello', 'world', 'hojun']
arr3.includes('leehojun') // false

const arr7 = ['hello', 'world', 'hojun']
arr3.includes('jun') // false

// join
const arr8 = ['hello', 'world', 'hojun']
arr4.join('!') // 'hello!world!hojun'

const arr9 = ['010', '5044', '2903']
arr4.join('-') // '010-5044-2903'

const arr10 = [010, 5044, 2903]
arr4.join('-') // 이렇게 하면 안됨 오류먹음

// 0b100 // 4 b는 바이너리의 첫글자
// 0o100 // 64 o는 옥타의 첫글자
// 0x100 // 256 x는 헥사를 표현 16진법