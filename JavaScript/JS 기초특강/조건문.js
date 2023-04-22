for (let index = 0; index < 5; index++) {
    console.log(index)
}

// for를 while로 바꿔보기
let index = 0;
while (index < 5) {
    console.log(index)
    index++
}

// 계속 실행(반복)하는데 중간에 조건넣어서 멈추기.
while (true) {
    let num = prompt("취소할거임..? 취소할거면 1아니면 2");
    if (num == 1) {
        break;
    }
}

function range(num, min, max) {
    // true 또는 false 로 반환
    return num > min && num < max
}


for (let index = 0; index < 10; index++) {
    if (range(index, 2, 4)) {
        console.log(index)
    }
}