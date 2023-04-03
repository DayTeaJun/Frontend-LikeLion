let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는
var value2 = null;
console.log(val); //null

// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반평균 = 0

// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균 // 150

let 반점수 = [10, 20, 30, undefined, 40, 50]
let 반평균 = 0

for (const i of 반점수) {
    console.log(i)
    반평균 += i
}

반평균 // NaN