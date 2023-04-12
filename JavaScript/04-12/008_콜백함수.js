// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function 가장작은값에두배(a, b) {
    console.log(a)
    let result = b(...a) * 2
    return b(...a)
}

가장작은값에두배([10, 20, 11, 21, 19, 17], Math.min)

let arr = [10, 20, 11, 21, 19, 17]
arr.map((v, i) => v * 2)