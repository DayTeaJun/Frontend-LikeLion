'use strict'; // 엄격모드 활성화

// 엄격모드 특징
// 1. 선언하지 않은 변수에 값을 할당할 수 없습니다.
// 2. 읽기 전용 객체에 값을 할당하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
// 3. 지울수 없는 값을 지우려고 하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
// 4. 함수 파라메터에 중복된 이름을 사용할 수 없습니다.

str = "hello strict" // 이렇게하면 자바스크립트는 에러가 발생하지 않는다. 자동으로 전역변수가 됨.
// 근데 엄격모드를 선언한 이후라면 에러가 뜬다. 키워드 없는 선언 자체를 막음.

undefined = 10; // undefined, null, Infinity, Math.PI 같은 읽기 전용에 값을 넣어도 실행됨 하지만 undefined가 10으로 바뀌지 않음 그냥 무시함
// 엄격모드 선언시에는 에러가 뜨게함.

const obj = {
    firstName: 'jaehyun',
    lastName: 'han'
}
delete obj.firstName // 객체의 프로퍼티를 삭제함

delete Object.prototype // 프로토타입을 지운다. 이렇게하면 에러가 발생하지 않지만, 실제로 지워지지 않고 무시함
// 엄격모드를 하면 에러가 뜨게함

function myFunc(a, a, b) { // 파라미터에 중복되는 이름이 들어가지만, 자바스크립트는 문제없이 실행함
    console.log(a + a + b);
}
myFunc(1, 2, 3) // 7
// 엄격모드 선언시, 중복된 파라미터가 있을 경우 에러가 뜨게함.