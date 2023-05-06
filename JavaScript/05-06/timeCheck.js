let start = Date.now();
// Date.now()는 UTC 기준으로 1970 1월 1일부터 밀리초로 얼마나 시간이 흘렀는지 반환함.

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

const asyncBlocking = () => {
  return new Promise((resolve) => {
    let i = 0;
    while (i < 9999999) {
      i++;
    }
    resolve("blocking finished");
  });
};

result("동기식 코드1");
// Promise으로만으로는 비동기가 아님, 객체임.
// 프로미스 객체를 만드는 과정은 동기적으로 진행됨.
// result(asyncBlocking());

setTimeout(() => {
  result("setTimeout finished");
}, 0);
// 0으로 셋타임 함수를 바로 실행시킬려고 했는데 제일 마지막에 실행됨.

result(
  asyncBlocking().then((txt) => {
    // then은 콜백함수를 실행시키고
    // then의 인자(txt)는 resolve로 전달된 인자
    result(txt);
  })
);
// then이라는 메소드가 비동기 함수다(프로미스 자체가 비동기가 아님, 프로미스의 메서드인 then이 비동기임)

result("동기식 코드2");
// 시간을 확인해보니 자바스크립트가 싱글쓰레드인 것을 확인함.

//
