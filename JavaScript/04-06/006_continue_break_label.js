// break은 자신을 감싼 반복문만 탈출. 그 상위 반복문까지 탈출하지 않음
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
        if (j === 3) {
            break // 자기를 감싸고 있는 부분(여기서는 반복문)에만 탈출함 이때는 i x 3 까지만 출력됨 (2 x 1, 2 x 2, 2 x 3, 3 x 1, 3 x 2, 3 x 3, 4 x 1, ...)
        }
    }
}

switchValue = 0
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
        if (j === 3) {
            if (true) {
                if (true) {
                    if (true) {
                        switchValue = 1
                        break // 자신을 감싼 반복문 탈출
                    }
                }
            }
        }
    }
    // toggle
    if (switchValue === 1) {
        break // 자신을 감싼 반복문 탈출
    }
}

// continue는 아래 구문을 실행시키지 않고 다음 루프로 넘어가서 다시 구문을 실행함
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (j === 3) {
            continue // 다음 루프로 (구문으로) 넘김
            // 이러면 i x 3 부분은 다 삭제
        }
        console.log(`${i} X ${j} = ${i * j}`)
    }
}

// label은 특정한 곳으로 '점프'하게 만듦. 근데 가독성을 '엄청' 헤치므로 잘 안씀

outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}

jun: // outer가 반드시 필요한 명칭이 아님, 자바스크립트 변수 규칙만 적용되면 됨.
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break jun;
        }
        console.log(i, j);
    }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
    hojun: for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if (j === 3) {
                break hojun;
            }
            console.log(`${반복}. ${i} X ${j} = ${i * j}`)
        }
    }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if (j === 3) {
                break hojun;
            }
            console.log(`${반복}. ${i} X ${j} = ${i * j}`)
        }
    }
}