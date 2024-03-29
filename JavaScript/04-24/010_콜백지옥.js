// sudo코드 (이해하기 쉽게 대충 쓴 코드)
const result = 비동기통신함수(); // 비동기로 실행중
통신함수의결과를가공하는함수1(result); // 이건 동기로 실행중 그래서 result는 undefined 왜냐하면 페이지가 로드 됬을 때 위의 비동기통신함수()보다 동기로 실행 중인 함수가 먼저 로드되기 때문.

const result2 = 비동기통신함수2();
통신함수의결과를가공하는함수2(result2);
const total = result + result2;

// 이런 방식은 불가능합니다.
// Ajax는 기본적으로 비동기적으로 서버와의 통신을 처리하기 때문에 Ajax와 기존의 동기식 코드를 함께 작성하면 코드의 실행순서에 문제가 발생합니다.
// 자바스크립트 엔진은 비동기 코드가 끝날때까지 다른 코드의 실행을 멈추지 않기 때문입니다.

// sudo코드 2
const total2 = 비동기통신함수(
    input, // 유저의 입력
    통신함수의결과를가공하는함수1(
        result, // 함수의 결과
        비동기통신함수2(
            통신함수의결과를가공하는함수2(
                result,
                result2
            )
        )
    )
);
// 이렇게 비동기 함수가 끝나기 전에 중간 중간에 필요한 콜백함수를 실행시키며 사용할 수 밖에 없었습니다.

// 그래서 통신이 끝난 다음에야 다음 함수가 실행되도록 콜백함수로 코드를 작성해야합니다.
// 결국 일반적인 동기식 코드처럼 비동기 함수 실행 후 다음 라인에서 다른 함수를 실행하는, 순차적으로 함수들을 나열하는 방식이 불가능합니다. 비동기 코드가 끝나고 콜백으로 함수를 부르고, 다음 함수를 또 콜백으로 부르는 형태가 되야합니다.