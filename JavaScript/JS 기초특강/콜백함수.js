const a = [1, 2, 3, 4, 5, 6, 7, 8]
const arrLen = a.length;
for (let index = 0; index < arrLen; index++) {
    console.log(a[index])
}
// 같은 일을 반복한다.
// 뭐에대해?? > 배열이 가지고있는 값들에 대해

// 배열이 가지고있는 값들에 대해 어떠한 일을 반복 합니다.


// callback

//이게 무슨함수임..?


function forEach(함수) {
    return 함수()
}

// call 호출할거임 언제? 뒤에..(나중에) back
function 대신실행하고싶은함수() {
    console.log("나.. 실행됐니..?");
}


forEach(대신실행하고싶은함수);
// forEach 한테 대신실행하고싶은함수를 넘김
// 그럼 forEach가 대신해줌 ㅋ

map // 무슨뜻임..?




// forEach -> 배열요소에 대해 각각 반복작업을 하도록 함
// map -> 배열요소에 대해 각각 반복작업한 결과를 새로 만들어서 줌
// forEach는 단순하게 요소에 대해 반복작업을 하고싶을때!
// map -> 배열요소에 대해 작업한 결과를 새로운 배열로 만들때!