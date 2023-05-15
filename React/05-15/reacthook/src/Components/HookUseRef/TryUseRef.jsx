import React, { useState, useEffect, useRef } from "react";

function Counter2() {
  // 바뀌었을 때 리액트에게 알려주는 useState는
  // setState으로 state를 바꾸었을 때 이것을 포함한 전체 함수(현재 Counter2()함수,컴포넌트)는 다시 실행되고 화면이 바뀌면서 다시 실행된다.
  const [num2, setNum2] = useState(0);
  // 그래서 이러한 변수는 화면이 바뀔 때마다 다시 0으로 초기화가 되서 숫자변화가 일어나지 않는다.
  // let num = 0;
  // 그래서 이러한 내용을 해결해주기 위해 useRef()를 쓴다.
  // useRef()를 하면 리액트가 대신 기억해준다. (num이 변화했던 것을)
  // useRef()는 리렌더링이 발생하지 않아서 페이지에서 바로 보여주진 않음.
  const num = useRef(0);
  console.log(num.current);

  return (
    <>
      {/* 함수를 다시그려주는 것 */}
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>

      {/* 함수가 다시 실행되서 num은 초기화된다. */}
      <button
        onClick={() => {
          // num += 1;
          num.current += 1;
          // 리액트에서 보이지 않아서 콘솔로그 찍음
          console.log(num.current);
        }}
      >
        버튼
      </button>
      {/* <div>{num}</div> */}
      <div>{num.current}</div>
    </>
  );
}

export default Counter2;
