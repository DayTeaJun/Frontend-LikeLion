// async function message() {
//   let hello = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("world");
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }

// promise로만 실행되게 하기
// function message() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   }).then((hello) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(hello + " world");
//       });
//     }).then((world) => {
//       console.log(world);
//     });
//   });
// }

function message() {
  // 스태틱 함수
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }), // 배열 원소로 받기때문에 콤마(,)
    // then의 인자를 배열로 받음
  ])
    //   .then((resultArray) => {
    //     console.log(`${resultArray[0]} ${resultArray[1]}`);
    //   });

    // 구조분해 할당으로 함
    .then(([hello, world]) => {
      console.log(`${hello} ${world}`);
    });
  // 위 프라미스 원소를 두가지 한번에 병렬적으로 처리함.
}

message();

// 이벤트 루프
// 이벤트 루프란 자바스크립트 엔진이 아닌, 구동하는 환경(브라우저, 노드)에서 가지고 있는 장치이다. 콜 스택과 태스크 큐(= 콜백 큐)를 감시하며, 콜 스택이 비어있을 경우에 태스크 큐에서 태스크(= 콜백함수)를 가져와 콜 스택에 넣어 실행시키는 기능을 한다.

// 메인 쓰레드에서 찍힌 코드들이 먼저 실행되고 위 함수는 await가 있는 함수이기 때문에(메인 쓰레드가 끝나면 마이크로 태스크 큐(promise같은 비동기애들)를 본다) 그 뒤에 실행됨(비동기)
// 이처럼 await의 특징은 async함수 안에서 코드의 실행 순서를 확정지을 수 있다는 것(외부만 됨)
// await는 then(promise가 끝날때까지 기다리고 then을 통해 다음 코드를 실행시키는 애)을 않쓰게함
console.log("i am sync!!");

// 위 Promise.all을 이용한 병렬처리를 async await로 바꾸기
async function message2() {
  // let [hello, world] 구조분해 할당
  let hello = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(" world");
      }, 100);
    }),
  ]);
  // console.log(`${hello}${world}`); 구조분해 할당
  console.log(hello[0] + hello[1]);
}

message2();
